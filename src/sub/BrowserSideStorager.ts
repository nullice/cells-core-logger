// Created by nullice on 2018/08/08 - 18:0


import { CellsLogger, LogItem } from "@/CellsLogger"
import { LogStorager } from "@/sub/Abstract.LogStorager"

export class BrowserSideStorager extends LogStorager {

    private logger !: CellsLogger

    storageObject = <LogItem[]> []

    constructor(logger: CellsLogger) {
        super()
        this.logger = logger
    }

    push(log: LogItem) {
        this.storageObject.push(log)
    }

    repaly() {
        this.storageObject.forEach((log) => {
            this.logger.printer.push(log)
        })

    }

}

