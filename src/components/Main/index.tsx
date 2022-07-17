import React, {FC, useCallback, useState} from 'react';
import Title from "../Title";
import Content from "../Content";
import SearchList from "../SearchList";
import {generatePath, useNavigate} from "react-router-dom"
import {SearchItem} from "../../types/searchItem";

const Main: FC = () => {
    const [queryService, setQueryService] = useState<string[]>([])
    const [queryBrand, setQueryBrand] = useState<string[]>([])
    const navigate = useNavigate()

    const addUrlParams = useCallback(() => {
        const path = generatePath("s-:service/b-:brand", {
            service: queryService.join(","),
            brand: queryBrand.join(",")
        });
        navigate(path);
    }, [queryService, queryBrand])
    
    const handleClickItem = (searchParams: string) => (item: SearchItem) => {
        if (searchParams === "terms") {
            const indexOfChosenService = queryService.indexOf(item.slug);
            if (indexOfChosenService === -1) {
                setQueryService([...queryService, item.slug])
            } else {
                setQueryService(queryService.filter(service => service !== item.slug))
            }
        } else {
            const indexOfChosenBrand = queryBrand.indexOf(item.slug);
            if (indexOfChosenBrand === -1) {
                setQueryBrand([...queryBrand, item.slug])
            } else {
                setQueryBrand(queryBrand.filter(brand => brand !== item.slug))
            }
        }
        addUrlParams()
    }
    return (
        <>
            <Title/>
            <Content>
                <SearchList handleClickItem={handleClickItem("terms")} searchParams='terms'/>
                <SearchList handleClickItem={handleClickItem("brands_terms")} searchParams='brands_terms'/>
                {/*<SearchList searchParams="styles"/>*/}
            </Content>
        </>
    )
}
export default Main;
