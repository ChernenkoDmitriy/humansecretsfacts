import { storage } from "../../../../src/libraries/storage";
import { MobXRepository } from "../../../../src/store/MobXRepository";
import { IAppStateController } from "./IAppStateController";

class AppStateController {
    private isLoadedStore = new MobXRepository<boolean>();
    constructor() {
        this.isLoadedStore.save(false);
    }

    set isLoaded(value: boolean) {
        this.isLoadedStore.save(value);
    }

    get isLoaded() {
        return this.isLoadedStore.data || false;
    }
}

export const appState = new AppStateController();