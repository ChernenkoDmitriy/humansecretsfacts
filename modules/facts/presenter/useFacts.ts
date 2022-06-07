import { useCallback, useMemo } from "react";
import { factsModel } from "../../shared/entities/facts/FactsModel";
import { IFact } from "../../shared/entities/facts/IFact";

export const useFacts = () => {

    const getFavouriteFacts = useMemo(() => {
        const result = factsModel.facts.filter((fact: IFact) => fact.isFavourite);
        return result
    }, [factsModel.facts])

    const setFavouriteFacts = useCallback((id: string) => {
        const setIsFavourite = factsModel.facts.map((fact: IFact) => fact.id === id ? { ...fact, isFavourite: !fact.isFavourite } : fact)
        factsModel.facts = setIsFavourite
    }, [])

    return { getFavouriteFacts, setFavouriteFacts };
}