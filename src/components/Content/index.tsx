import React, {FC} from 'react';
import {ContentBox} from "./styled";

type ContentProps = {
    children: React.ReactNode
}
const Content: FC<ContentProps> = ({children}) => {
    return (
        <ContentBox>{children}</ContentBox>
    );
}
export default Content;
