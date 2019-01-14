import { LogItem } from "@/CellsLogger";
export declare abstract class LogStorager {
    abstract push(log: LogItem): void;
}
