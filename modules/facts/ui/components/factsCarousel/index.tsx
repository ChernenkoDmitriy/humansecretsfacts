import React from "react";
import { observer } from "mobx-react";
import { FC, useCallback, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { _size } from "../../../../../src/utils";
import { factsModel } from "../../../../shared/entities/facts/FactsModel";
import { IFact } from "../../../../shared/entities/facts/IFact";
import { FactItem } from "../factItem"


interface IProps {
    facts: IFact[];
    index: number;
}

export const FactCarousel: FC<IProps> = observer(({ facts, index }) => {
    const flatListRef = useRef<Carousel<IFact> | null>()

    const renderItem = useCallback(({ item }: { item: IFact }) => (
        <FactItem item={item} factsLength={facts.length} />
    ), []);


    const onSnapToItem = (index: number) => {
        factsModel.lastIndex = index;
    }

    return (
        <Carousel
            ref={(ref) => { flatListRef.current = ref }}
            data={facts}
            renderItem={renderItem}
            sliderWidth={_size.width}
            itemWidth={_size.width}
            initialScrollIndex={index}
            pagingEnabled
            getItemLayout={(data, index) => {
                return { length: _size.width, offset: _size.width * index, index };
            }}
            firstItem={index}
            onSnapToItem={onSnapToItem}
        />
    );
});
