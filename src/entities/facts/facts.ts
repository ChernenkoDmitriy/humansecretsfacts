import { factsMock } from "../../../MOCKS/factsMock";
import { IFactsMock } from "../../../MOCKS/IFactsMock";
import { IStorage, storage } from "../../libraries/storage";
import { MobXRepository } from "../../store/MobXRepository";

export interface IFactsModel {

}

class FactsModel implements IFactsModel {
    private currentCategoryStore = new MobXRepository<string>();
    private factsStore = new MobXRepository<any>();
    private lastIndexStore = new MobXRepository<number>();
    private currentFactIdStore = new MobXRepository<any>('digestion1');


    constructor(private storage: IStorage) {
        this.load()
    }

    private load = () => {
        this.storage.get('FACTS')
            .then(data => { data && this.factsStore.save(data); })
            .catch(error => console.warn('factsList -> load: ', error));
        this.storage.get('LAST_INDEX')
            .then(data => { data && this.lastIndexStore.save(data); })
            .catch(error => console.warn('lastIndexStore -> load: ', error));
    }

    get facts() {
        return this.factsStore.data || factsMock;
    }

    set facts(data) {
        this.storage.set('FACTS', data)
        this.factsStore.save(data)
    }

    get currentFactId() {
        return this.currentFactIdStore.data;
    }

    set currentFactId(data) {
        this.currentFactIdStore.save(data)
    }

    get currentFact() {
        const result = this.facts.find((element: { id: number }) => { if (element.id === this.currentFactId) { return element } })
        return result
    }

    set lastIndex(data: number) {
        this.lastIndexStore.save(data)
        this.storage.set('LAST_INDEX', data)
    }

    get lastIndex() {
        console.log('lastIndex', this.lastIndexStore.data)
        return this.lastIndexStore.data || 0;
    }

    set category(data: string) {
        this.currentCategoryStore.save(data)
    }

    set favouriteFacts(data: number) {
        const setIsFavourite = this.facts.map((fact: { id: number; isFavourite: boolean; }) => fact.id === data ? { ...fact, isFavourite: !fact.isFavourite } : fact)
        this.facts = setIsFavourite
    }

    get favouriteFacts() {
        const result = this.facts.filter((fact: IFactsMock) => fact.isFavourite);
        return result
    }

    get factsByCategory() {
        const result = this.facts.findIndex((element: { category: number | null; }, index: any) => { if (element.category === this.currentCategoryStore.data) { return index - 1 } })
        console.log(result)
        return result
    }

}

export const factsModel = new FactsModel(storage);