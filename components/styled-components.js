import styled from "styled-components";
import { border, color, compose, flexbox, layout, space, typography } from "styled-system";

export const Box = styled("div")(compose(border, color, flexbox, layout, space, typography));
