import {FC, useEffect, useState} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from "@mui/material/Checkbox";
import {SearchItem} from "../../types/searchItem";
import {ItemBox} from "./styled";

type SearchListProps = {
    item: SearchItem
    handleClickItem: (item: SearchItem) => void
}

const ListItem: FC<SearchListProps> = ({item, handleClickItem}) => {
    const [isChecked, setIsChecked] = useState(false);
    const path = window.location.pathname

    useEffect(() => {
        setIsChecked(path.includes(item.slug))
    }, [path, setIsChecked])

    return (
        <ItemBox>
            <ListItemButton
                onClick={() => handleClickItem(item)}>
                <Checkbox checked={isChecked}/>
                <ListItemText>{item.label}</ListItemText></ListItemButton>
        </ItemBox>

    )
}
export default ListItem;
