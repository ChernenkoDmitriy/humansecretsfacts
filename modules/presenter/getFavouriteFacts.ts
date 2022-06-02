import { factsMock } from "../../MOCKS/factsMock";
import { IFactsMock } from "../../MOCKS/IFactsMock";

export const getFavouriteFacts = () => {
    const favouriteFacts: { categoryName: string, facts: IFactsMock[] } = { categoryName: 'favourite', facts: [] }

    factsMock.forEach(category => {
        //@ts-ignore
        if (category.empty) {
            return favouriteFacts
        }
        else {
            category.facts.forEach(fact => {
                if (fact.isFavourite) {
                    console.log(fact)
                    favouriteFacts.facts.push(fact)
                }
            })
        }
    });
    return favouriteFacts
}