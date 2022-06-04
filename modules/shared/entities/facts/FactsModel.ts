import { factsMock } from "../../../../MOCKS/factsMock";
import { IStorage, storage } from "../../../../src/libraries/storage";
import { MobXRepository } from "../../../../src/store/MobXRepository";
import { IFact } from "./IFact";

export interface IFactsModel {
    setLastIndexByCategory: (category: string) => void;
}

class FactsModel implements IFactsModel {
    private factsStore = new MobXRepository<IFact[]>();
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

    set facts(data: IFact[]) {
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
        return this.lastIndexStore.data || 0;
    }

    set favouriteFacts(data: number) {
        const setIsFavourite = this.facts.map((fact: { id: number; isFavourite: boolean; }) => fact.id === data ? { ...fact, isFavourite: !fact.isFavourite } : fact)
        this.facts = setIsFavourite
    }

    get favouriteFacts() {
        const result = this.facts.filter((fact: IFact) => fact.isFavourite);
        return result
    }

    setLastIndexByCategory(category: string) {
        const index = this.facts.findIndex(item => item.category === category);
        console.log('setLastIndexByCategory ', index)
        this.lastIndex = index;
    }

}

export const factsModel = new FactsModel(storage);