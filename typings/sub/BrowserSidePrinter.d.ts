import { LogPrinter } from "@/sub/Abstract.LogPrinter";
import { CellsLogger, LogItem } from "@/CellsLogger";
export declare class BrowserSidePrinter extends LogPrinter {
    constructor(logger: CellsLogger);
    push(log: LogItem): void;
    styleRender(data: any, scope: string): any;
}
