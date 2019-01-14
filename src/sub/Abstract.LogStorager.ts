// Created by nullice on 2018/08/08 - 18:57 


import { LogItem } from "@/CellsLogger"

export abstract class LogStorager {

    abstract push(log: LogItem): void
}
