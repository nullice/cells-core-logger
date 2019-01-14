export enum StyleType {
    net_postRequest = "net_postRequest",
    net_postResponse = "net_postResponse",

    net_getRequest = "net_getRequest",
    net_getResponse = "net_getResponse",

    net_putRequest = "net_putRequest",
    net_putResponse = "net_putResponse",

    net_deleteRequest = "net_deleteRequest",
    net_deleteResponse = "net_deleteResponse",

    net_socket = "net_socket",
    net_socketOn = "socketOn",
    net_socketEmit = "socketEmit",

    net_request = "net_request",
    net_response = "net_response",

    badge = "badge",
    badgeGhost = "badgeGhost",

    dot = "dot",
    ul = "ul",
    like = "like",
    pin = "pin",

    group = "group"
}

export const Colors: { [name: string]: colorConfig } = {
    red: {
        bk: "#f33a5c",
        font: "#fff"
    },
    blue: {
        bk: "#09a2d0",
        font: "#fff"
    },
    green: {
        bk: "#3bcc90",
        font: "#fff"
    },
    orange: {
        bk: "#ff7e23",
        font: "#fff"
    },
    violet: {
        bk: "#a955e2",
        font: "#fff"
    },
    pink: {
        bk: "#ff899e",
        font: "#fff"
    },

    gray: {
        bk: "#ababab",
        font: "#fff"
    },
    black: {
        bk: "#414141",
        font: "#fff"
    },

    yellow: {
        bk: "#fbdbb2",
        font: "#ca6e49"
    }
}

export interface ColorSet {
    red: Function
    blue: Function
    green: Function
    orange: Function
    violet: Function
    pink: Function
    gray: Function
    yellow: Function

    [name: string]: Function
}

export type colorConfig = {
    bk: string
    font: string
}
