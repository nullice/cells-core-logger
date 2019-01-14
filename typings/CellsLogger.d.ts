import { LogPrinter } from "@/sub/Abstract.LogPrinter";
import { LogStorager } from "@/sub/Abstract.LogStorager";
import { ColorSet } from "@/sub/StyleType";
/**
 * Cells 的日志
 */
export declare class CellsLogger {
    printer: LogPrinter;
    storager: LogStorager;
    scopeName: string | null;
    constructor();
    /**
     * 创建一个指定作用域名的新 CellsLogger , 新实例会使用当前实例使用的存储器 storager
     * @param scopeName
     * @return {CellsLogger}
     */
    newScope(scopeName: string): CellsLogger;
    /**
     * 设置当前实例的作用域名，
     * @param scopeName
     * @return {this}
     */
    scope(scopeName: string): CellsLogger;
    /**
     * 仅仅在开发时会打印到控制台的简单日志，不会被记录
     * @param args
     */
    debug(...args: any[]): void;
    /**
     * 普通日志
     * @param args
     */
    log(...args: any[]): void;
    /**
     * 错误日志
     * @param args
     */
    error(...args: any[]): void;
    /**
     * 警告日志
     * @param args
     */
    warn(...args: any[]): void;
    /**
     * 日志分组
     * @param args
     */
    group(...args: any[]): void;
    /**
     * 默认关闭的日志分组
     * @param args
     */
    groupCollapsed(...args: any[]): void;
    /**
     * 日志分组结束
     * @param args
     */
    groupEnd(...args: any[]): void;
    /**
     * 标识日志
     * @param title
     * @param args
     */
    pin(title?: string, ...args: any[]): void;
    badge: {
        color: ColorSet;
        /**
         * 错误
         * @param title
         * @param args
         */
        error: (title?: string, ...args: any[]) => void;
        /**
         * 警告
         * @param title
         * @param args
         */
        wran: (title?: string, ...args: any[]) => void;
    };
    badgeGhost: {
        color: ColorSet;
        /**
         * 错误
         * @param title
         * @param args
         */
        error: (title?: string, ...args: any[]) => void;
        /**
         * 警告
         * @param title
         * @param args
         */
        wran: (title?: string, ...args: any[]) => void;
    };
    dot: {
        color: ColorSet;
        /**
         * 错误
         * @param title
         * @param args
         */
        error: (title?: string, ...args: any[]) => void;
        /**
         * 警告
         * @param title
         * @param args
         */
        wran: (title?: string, ...args: any[]) => void;
    };
    ul: {
        color: ColorSet;
        /**
         * 错误
         * @param title
         * @param args
         */
        error: (title?: string, ...args: any[]) => void;
        /**
         * 警告
         * @param title
         * @param args
         */
        wran: (title?: string, ...args: any[]) => void;
    };
    like: {
        color: ColorSet;
        /**
         * 错误
         * @param title
         * @param args
         */
        error: (title?: string, ...args: any[]) => void;
        /**
         * 警告
         * @param title
         * @param args
         */
        wran: (title?: string, ...args: any[]) => void;
    };
    net: {
        /**
         * post 请求
         */
        postRequest(...args: any[]): void;
        /**
         * post 响应
         */
        postResponse(...args: any[]): void;
        /**
         * get 请求
         */
        getRequest(...args: any[]): void;
        /**
         * get 响应
         */
        getResponse(...args: any[]): void;
        /**
         * put 请求
         */
        putRequest(...args: any[]): void;
        /**
         * put 响应
         */
        putResponse(...args: any[]): void;
        /**
         * delete 请求
         */
        deleteRequest(...args: any[]): void;
        /**
         * delete 响应
         */
        deleteResponse(...args: any[]): void;
        /**
         * socket
         */
        socket(...args: any[]): void;
        /**
         * socket on
         */
        socketOn(...args: any[]): void;
        /**
         * socket emit
         */
        socketEmit(...args: any[]): void;
        /**
         * 自定义 request
         * @param title 自定义标题
         * @param args
         */
        request(title?: string, ...args: any[]): void;
        /**
         * 自定义 response
         * @param title 自定义标题
         * @param args
         */
        response(title?: string, ...args: any[]): void;
    };
    private logOnce;
    private genStyleFunctionSet;
}
export interface LogItem {
    type: LogType;
    scope: string;
    data: any;
    date: Date;
}
export declare enum LogType {
    debug = "debug",
    info = "info",
    log = "log",
    error = "error",
    warn = "warn",
    group = "group",
    groupCollapsed = "groupCollapsed",
    groupEnd = "groupEnd",
    time = "time",
    timeEnd = "timeEnd"
}
