// Created by nullice on 2018/08/08 - 18:57 


import { CellsLogger, LogItem } from "@/CellsLogger"

export
abstract class LogPrinter {
    protected logger!:CellsLogger

    protected constructor(logger: CellsLogger) {
        this.logger = logger
    }

    abstract push(log: LogItem): void
}
