import { factsModel } from "../../shared/entities/facts/FactsModel";
import { IFact } from "../../shared/entities/facts/IFact";

export const useFacts = () => {

    const getFavouriteFacts = () => {
        const result = factsModel.facts.filter((fact: IFact) => fact.isFavourite);
        return result
    }

    const setFavouriteFacts = (id: string) => {
        const setIsFavourite = factsModel.facts.map((fact: IFact) => fact.id === id ? { ...fact, isFavourite: !fact.isFavourite } : fact)
        factsModel.facts = setIsFavourite
    }

    return { getFavouriteFacts, setFavouriteFacts };
}