import {css} from "@emotion/react";

type FlexDirectionTypes = "column" | "column-reverse" | "row" | "row-reverse";

type FlexType = {
    ai?: string;
    jc?: string;
    fd?: FlexDirectionTypes;
};

export const flex = (props?: FlexType) => {
    const alignItems = props?.ai || "inherit";
    const justifyContent = props?.jc || "inherit";
    const flexDirection = props?.fd || "row";

    return css`
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;

      // Align Items
    @if ${alignItems} = = flex-start {
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;
    } @else if ${alignItems} = = flex-end {
      -webkit-box-align: end;
      -moz-box-align: end;
      -ms-flex-align: end;
    } @else {
      -webkit-box-align: ${alignItems};
      -moz-box-align: ${alignItems};
      -ms-flex-align: ${alignItems};
    } -webkit-align-items: ${alignItems};
      align-items: ${alignItems};

      // Justify Content
    @if ${justifyContent} = = flex-start {
      -webkit-box-pack: start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
    } @else if ${justifyContent} = = flex-end {
      -webkit-box-pack: end;
      -moz-box-pack: end;
      -ms-flex-pack: end;
    } @else if ${justifyContent} = = space-between {
      -webkit-box-pack: justify;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
    } @else if ${justifyContent} = = space-around {
      -ms-flex-pack: distribute;
    } @else {
      -webkit-box-pack: ${justifyContent};
      -moz-box-pack: ${justifyContent};
      -ms-flex-pack: ${justifyContent};
    } -webkit-justify-content: ${justifyContent};
      justify-content: ${justifyContent};

      // Flex Direction
      flex-direction: ${flexDirection};
      -ms-flex-direction: ${flexDirection};
      -webkit-flex-direction: ${flexDirection};
    `;
};

type FlexCenterType = {
    fd?: FlexDirectionTypes;
};

export const flexCenter = (props?: FlexCenterType) =>
    flex({ai: "center", jc: "center", fd: props?.fd});

type FlexColumnType = {
    ai?: string;
    jc?: string;
};

export const flexColumn = (props?: FlexColumnType) =>
    flex({ai: props?.ai, jc: props?.jc, fd: "column"});
