import List from '@mui/material/List';
import styled from "@emotion/styled";
import {flexColumn} from "../../theme/mixins";


export const StyleList = styled(List)`
  &.MuiList-root {
    ${flexColumn()}
    height: 4rem;
    width: 400px;
  }
`
