// Created by nullice on 2018/08/08 - 18:06

import { LogPrinter } from "@/sub/Abstract.LogPrinter"
import { CellsLogger, LogItem, LogType } from "@/CellsLogger"
import pad from "lodash/pad"
import padEnd from "lodash/padEnd"
import { StyleType } from "@/sub/StyleType"


export class BrowserSidePrinter extends LogPrinter {
    constructor(logger: CellsLogger) {
        super(logger)
    }

    push(log: LogItem): void {
        ;(<any>console)[log.type].apply(console, this.styleRender(log.data, log.scope))
    }

    styleRender(data: any, scope: string) {
        if (data && data.length === 1 && data[0].type) {
            let label = ""
            let styles = []
            let usedIndex = 0

            if (scope != null) {
                label += `%c[${pad(scope, 9)}]`
                styles.push(StyleCSS.scope)
            }


            switch (data[0].type) {
                case StyleType.net_postRequest: {
                    label += pad(`%c  POST ❯`, 6)
                    styles.push(StyleCSS.net_post + StyleCSS.net_Request)
                    break
                }

                case StyleType.net_postResponse: {
                    label += pad(`%c❮ POST  `, 6)
                    styles.push(StyleCSS.net_post + StyleCSS.net_Response)
                    break
                }

                case StyleType.net_getRequest: {
                    label += pad(`%c  GET ❯`, 6)
                    styles.push(StyleCSS.net_get + StyleCSS.net_Request)
                    break
                }

                case StyleType.net_getResponse: {
                    label += pad(`%c❮ GET  `, 6)
                    styles.push(StyleCSS.net_get + StyleCSS.net_Response)
                    break
                }

                case StyleType.net_putRequest: {
                    label += pad(`%c  PUT ❯`, 6)
                    styles.push(StyleCSS.net_put + StyleCSS.net_Request)
                    break
                }

                case StyleType.net_putResponse: {
                    label += pad(`%c❮ PUT  `, 6)
                    styles.push(StyleCSS.net_put + StyleCSS.net_Response)
                    break
                }

                case StyleType.net_deleteRequest: {
                    label += pad(`%c  DELETE ❯`, 6)
                    styles.push(StyleCSS.net_delete + StyleCSS.net_Request)
                    break
                }

                case StyleType.net_deleteResponse: {
                    label += pad(`%c❮ DELETE  `, 6)
                    styles.push(StyleCSS.net_delete + StyleCSS.net_Response)
                    break
                }

                case StyleType.net_socket: {
                    label += pad(`%c  SOCKET  `, 6)
                    styles.push(StyleCSS.net_socket + StyleCSS.badge.squareBothLine)
                    break
                }

                case StyleType.net_socketOn: {
                    label += pad(`%c❮ SOCKET  `, 6)
                    styles.push(StyleCSS.net_socket + StyleCSS.net_Response)
                    break
                }

                case StyleType.net_socketEmit: {
                    label += pad(`%c  SOCKET ❯`, 6)
                    styles.push(StyleCSS.net_socket + StyleCSS.net_Request)
                    break
                }


                case StyleType.net_request: {
                    let title = data[0].data[0]
                    usedIndex++
                    label += pad(`%c  ${title} ❯`, 12)
                    styles.push(StyleCSS.net_post + StyleCSS.net_Request)
                    break
                }

                case StyleType.net_response: {
                    let title = data[0].data[0]
                    usedIndex++
                    label += pad(`%c❮ ${title}  `, 12)
                    styles.push(StyleCSS.net_post + StyleCSS.net_Response)
                    break
                }

                case  StyleType.badge: {
                    let color = data[0].data[0]
                    let title = data[0].data[1]
                    usedIndex += 2
                    label += `%c${title}`
                    styles.push(StyleCSS.badge.radius + `background:${color.bk}; color:${color.font};`)
                    break
                }

                case  StyleType.badgeGhost: {
                    let color = data[0].data[0]
                    let title = data[0].data[1]
                    let subTitle = data[0].data[2]
                    usedIndex += 3

                    let leftStyle = `
                        padding: 3px 4px 3px 6px;
                        text-align: center;
                        border-radius: 4px 0 0 4px;
                        color: ${color.bk};
                        border: 1px solid ${color.bk};
                         font-family: sans-serif;
                         line-height:1;
                        `
                    let rightStyle = `
                        padding: 3px 6px 3px 4px;
                        text-align: center;
                        border-radius: 0 4px 4px 0;
                        color: ${color.font};
                        background: ${color.bk};
                        border: 1px solid ${color.bk};
                        font-family: sans-serif;
                        line-height:1;
                        `
                    label += `%c${title}`
                    styles.push(leftStyle)

                    label += `%c${subTitle}`
                    styles.push(rightStyle)

                    break
                }


                case  StyleType.dot: {
                    let color = data[0].data[0]
                    let title = data[0].data[1]
                    usedIndex += 2
                    label += `%c  ● `
                    styles.push(`color:${color.bk}; font-weight: bold;`)

                    label += `%c${title}`
                    styles.push(`color:${color.bk}; text-decoration: underline;  font-weight: bold;`)


                    break
                }

                case  StyleType.ul: {
                    let color = data[0].data[0]
                    let title = data[0].data[1]
                    usedIndex += 2
                    label += `%c    - `
                    styles.push(`color:${color.bk}; font-weight: bold;`)

                    label += `%c${title}`
                    styles.push(`color:${color.bk}; text-decoration: underline;  font-weight: bold;`)


                    break
                }

                case  StyleType.like: {
                    let color = data[0].data[0]
                    let title = data[0].data[1]
                    usedIndex += 2
                    label += `%c  ♥ `
                    styles.push(`color:${color.bk}; font-weight: bold;`)

                    label += `%c${title}`
                    styles.push(`color:${color.bk}; text-decoration: underline;  font-weight: bold;`)


                    break
                }

                case  StyleType.pin: {
                    let title = data[0].data[0]
                    usedIndex++
                    label += `%c  <`
                    styles.push(StyleCSS.pin)
                    label += `%c${title}`
                    styles.push(StyleCSS.pinText)
                    label += `%c>  `
                    styles.push(StyleCSS.pin)

                    break
                }
                case  StyleType.group: {
                    let title = data[0].data[0]
                    usedIndex++
                    label += `%c${title}`
                    styles.push(StyleCSS.group)
                    break
                }


            }
            return [label, ...styles, ...data[0].data.slice(usedIndex)]
        } else {
            if (scope != null) {
                let s = `%c[${scope}]`
                data = [pad(s, 9), StyleCSS.scope, ...data]
            }
            return data
        }

    }
}


function addStyleString(str: string, style: string, styles: string[]) {
    str += "%c" + str
    styles.push(style)
    return str
}

const StyleCSS = {
    scope: `        
            color: rgba(0, 0, 0, 0.27);
            text-align: center;
            margin-right: 5px;
            font-family: sans-serif;
  
           `,
    net_post: `
            background: #2c84e2;
            border-color:#105dbb;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
    `,

    net_delete: `
            background: #577cd9;
            border-color:#3524d8;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
    `,
    net_get: `
            background: #33c58a;
            border-color:#0d9476;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
    `,
    net_put: `
            background: #0db0d9;
            border-color:#067fb2;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
    `,
    net_socket: `
            background: #8432e0;
            border-color:#5e16a2;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
    `,
    net_Request: `
            padding: 2px 8px;
            padding-left: 6px;
            border-radius: 2px 25px 25px 2px;
            text-align: center;
            border-style: solid;
            border-width: 0;
            border-left-width: 4px;
            font-family: sans-serif;
    `,
    net_Response: `
            padding: 2px 8px;
            padding-right: 6px;
            border-radius: 25px 2px 2px 25px;
            text-align: center;
            border-style: solid;
            border-width: 0;
            border-right-width: 4px;
            font-family: sans-serif;
    `,


    badge: {
        squareBothLine: `
            padding: 2px 8px;
            text-align: center;
            border-style: solid;
            border-width: 0;
            border-left-width: 4px;
            border-right-width: 4px;
            font-family: sans-serif;
        `,
        radius: `
            padding: 2px 8px;
            text-align: center;
            border-radius: 2px;
            font-family: sans-serif;
        `

    },

    pin: "color:#09a2d0; font-weight: bold;     font-style: italic;",
    pinText: "color:#8ba5ad;    font-style: italic;",
    group: `
            background: #81949e;
            color: #fff;
            padding: 1px 10px;
            border-radius: 2px;`
}
