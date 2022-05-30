import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  gridColumnGap,
  gridGap,
  gridRowGap,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

export const Box = styled("div")(
  compose(border, color, flexbox, layout, position, shadow, space, typography)
);

export const FlexBox = styled("div")(
  {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: ({ column }) => (column ? "column" : "row"),
  },
  compose(
    border,
    color,
    gridRowGap,
    gridColumnGap,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);

export const TextBox = styled("p")(compose(color, flexbox, layout, space, typography));

export const ImageBox = styled("img")(compose(layout, space));
