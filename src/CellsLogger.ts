import { LogPrinter } from "@/sub/Abstract.LogPrinter"
import { LogStorager } from "@/sub/Abstract.LogStorager"
import { BrowserSidePrinter } from "@/sub/BrowserSidePrinter"
import { BrowserSideStorager } from "@/sub/BrowserSideStorager"
import { colorConfig, Colors, StyleType, ColorSet } from "@/sub/StyleType"


/**
 * Cells 的日志
 */
export class CellsLogger {

    printer!: LogPrinter
    storager!: LogStorager
    scopeName!: string | null

    constructor() {
        this.printer = new BrowserSidePrinter(this)
        this.storager = new BrowserSideStorager(this)
    }

    /**
     * 创建一个指定作用域名的新 CellsLogger , 新实例会使用当前实例使用的存储器 storager
     * @param scopeName
     * @return {CellsLogger}
     */
    newScope(scopeName: string) {
        let newInstance = new CellsLogger()
        newInstance.scopeName = scopeName
        newInstance.storager = this.storager
        return newInstance
    }


    /**
     * 设置当前实例的作用域名，
     * @param scopeName
     * @return {this}
     */
    scope(scopeName: string): CellsLogger {
        this.scopeName = scopeName
        return this
    }


    /**
     * 仅仅在开发时会打印到控制台的简单日志，不会被记录
     * @param args
     */
    debug(...args: any[]) {
        this.logOnce(LogType.debug, args)
    }


    /**
     * 普通日志
     * @param args
     */
    log(...args: any[]) {
        this.logOnce(LogType.log, args)
    }


    /**
     * 错误日志
     * @param args
     */
    error(...args: any[]) {
        this.logOnce(LogType.error, args)
    }

    /**
     * 警告日志
     * @param args
     */
    warn(...args: any[]) {
        this.logOnce(LogType.warn, args)
    }



    /**
     * 日志分组
     * @param args
     */
    group(...args: any[]) {
        this.logOnce(LogType.log, [{ type: StyleType.group, data: [ ...args] }])
    }

    /**
     * 默认关闭的日志分组
     * @param args
     */
    groupCollapsed(...args: any[]) {
        this.logOnce(LogType.groupCollapsed, [{ type: StyleType.group, data: [...args] }])
    }

    /**
     * 日志分组结束
     * @param args
     */
    groupEnd(...args: any[]) {
        this.logOnce(LogType.groupEnd, args)
    }


    /**
     * 标识日志
     * @param title
     * @param args
     */
    pin(title: string = "", ...args: any[]) {
        this.logOnce(LogType.log, [{ type: StyleType.pin, data: [ title, ...args] }])
    }

    badge = (self => {
        return self.genStyleFunctionSet(self, StyleType.badge)
    })(this)
    badgeGhost = (self => {
        return self.genStyleFunctionSet(self, StyleType.badgeGhost)
    })(this)
    dot = (self => {
        return self.genStyleFunctionSet(self, StyleType.dot)
    })(this)
    ul = (self => {
        return self.genStyleFunctionSet(self, StyleType.ul)
    })(this)
    like = (self => {
        return self.genStyleFunctionSet(self, StyleType.like)
    })(this)



    net = (self => {
        return {
            /**
             * post 请求
             */
            postRequest(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_postRequest, data: args }])
            },
            /**
             * post 响应
             */
            postResponse(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_postResponse, data: args }])
            },

            /**
             * get 请求
             */
            getRequest(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_getRequest, data: args }])
            },
            /**
             * get 响应
             */
            getResponse(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_getResponse, data: args }])
            },
            /**
             * put 请求
             */
            putRequest(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_putRequest, data: args }])
            },
            /**
             * put 响应
             */
            putResponse(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_putResponse, data: args }])
            },

            /**
             * delete 请求
             */
            deleteRequest(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_deleteRequest, data: args }])
            },
            /**
             * delete 响应
             */
            deleteResponse(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_deleteResponse, data: args }])
            },

            /**
             * socket
             */
            socket(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_socket, data: args }])
            },

            /**
             * socket on
             */
            socketOn(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_socketOn, data: args }])
            },
            /**
             * socket emit
             */
            socketEmit(...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_socketEmit, data: args }])
            },


            /**
             * 自定义 request
             * @param title 自定义标题
             * @param args
             */
            request(title: string = "", ...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_request, data: [title, ...args] }])
            },

            /**
             * 自定义 response
             * @param title 自定义标题
             * @param args
             */
            response(title: string = "", ...args: any[]) {
                self.logOnce(LogType.log, [{ type: StyleType.net_response, data: [title, ...args] }])
            }
        }
    })(this)


    // 创建一条日志
    private logOnce(type: LogType, args: any[]) {
        let log = <LogItem>{
            type: type,
            scope: this.scopeName,
            data: args,
            date: new Date()
        }

        this.storager.push(log)
        this.printer.push(log)
    }

    private genStyleFunctionSet(self: CellsLogger, style: StyleType) {
        let ob = {
            color: <ColorSet>{},
            /**
             * 错误
             * @param title
             * @param args
             */
            error: (title: string = "", ...args: any[]) => {
                self.logOnce(LogType.error, [{ type: style, data: [Colors.red, title, ...args] }])
            },

            /**
             * 警告
             * @param title
             * @param args
             */
            wran: (title: string = "", ...args: any[]) => {
                self.logOnce(LogType.warn, [{ type: style, data: [Colors.yellow, title, ...args] }])
            }
        }

        for (let key in Colors) {
            ob.color[key] = (title: string = "", ...args: any[]) => {
                self.logOnce(LogType.log, [{ type: style, data: [Colors[key], title, ...args] }])
            }
        }

        /**
         * 自定义颜色
         */
        ob.color.value = (color: colorConfig, title: string = "", ...args: any[]) => {
            self.logOnce(LogType.log, [{ type: style, data: [color, title, ...args] }])
        }

        return ob
    }
}


export interface LogItem {
    type: LogType,
    scope: string,
    data: any,
    date: Date

}

export enum LogType {
    debug = "debug",
    info = "info",
    log = "log",
    error = "error",
    warn = "warn",
    group = "group",
    groupCollapsed = "groupCollapsed",
    groupEnd = "groupEnd",
    time = "time",
    timeEnd = "timeEnd",
}


