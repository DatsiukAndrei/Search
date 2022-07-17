import {FC} from 'react';
import useFetchData from '../../hooks/useFetchData';
import ListItem from "../ListItem";
import CircularProgress from '@mui/material/CircularProgress';
import {StyleList} from "./styled";
import {SearchItem} from "../../types/searchItem";


type SearchListProps = {
    searchParams: "terms" | "brands_terms" | "styles";
    handleClickItem: (item: SearchItem) => void
}


const SearchList: FC<SearchListProps> = ({searchParams, handleClickItem}) => {
    const {data, loading} = useFetchData({searchParams});

    const renderList = () => Object.entries(data).map(([key, value]) => (
        <ListItem
            key={key}
            handleClickItem={handleClickItem}
            item={value as SearchItem}
        />
    ))
    if (loading) {
        return <CircularProgress/>
    }
    return (
        <StyleList>{renderList()}</StyleList>
    );
}
export default SearchList;
