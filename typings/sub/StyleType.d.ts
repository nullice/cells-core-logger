export declare enum StyleType {
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
export declare const Colors: {
    [name: string]: colorConfig;
};
export interface ColorSet {
    red: Function;
    blue: Function;
    green: Function;
    orange: Function;
    violet: Function;
    pink: Function;
    gray: Function;
    yellow: Function;
    [name: string]: Function;
}
export declare type colorConfig = {
    bk: string;
    font: string;
};
