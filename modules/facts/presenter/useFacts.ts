import { useCallback, useMemo } from "react";
import { factsModel } from "../../shared/entities/facts/FactsModel";
import { IFact } from "../../shared/entities/facts/IFact";

export const useFacts = () => {

    const getFavoriteFacts = useMemo(() => {
        const result = factsModel.facts.filter((fact: IFact) => fact.isFavorite);
        return result
    }, [factsModel.facts])

    const setFavoriteFacts = useCallback((id: string) => {
        const setIsFavorite = factsModel.facts.map((fact: IFact) => fact.id === id ? { ...fact, isFavorite: !fact.isFavorite } : fact)
        factsModel.facts = setIsFavorite
    }, [])

    return { getFavoriteFacts, setFavoriteFacts };
}