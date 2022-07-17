import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import {COLOR_BLACK} from "../../theme/colors";
import {flex} from "../../theme/mixins";

export const StyleTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 3rem;
    ${flex({jc: "center", ai: "center"})};
    color: ${COLOR_BLACK};
  }
`
