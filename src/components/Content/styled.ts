import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import {flex} from "../../theme/mixins";


export const ContentBox = styled(Box)`
  &.MuiBox-root {
    ${flex({jc: "space-between", ai: "center"})};
    margin: 0 2rem;
  }
`
