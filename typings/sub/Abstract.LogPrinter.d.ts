import { CellsLogger, LogItem } from "@/CellsLogger";
export declare abstract class LogPrinter {
    protected logger: CellsLogger;
    protected constructor(logger: CellsLogger);
    abstract push(log: LogItem): void;
}
