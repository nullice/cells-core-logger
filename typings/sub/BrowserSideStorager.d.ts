import { CellsLogger, LogItem } from "@/CellsLogger";
import { LogStorager } from "@/sub/Abstract.LogStorager";
export declare class BrowserSideStorager extends LogStorager {
    private logger;
    storageObject: LogItem[];
    constructor(logger: CellsLogger);
    push(log: LogItem): void;
    repaly(): void;
}
