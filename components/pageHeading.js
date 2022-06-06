import { FlexBox, TextBox } from "./styled-components";

export function PageHeading({ title }) {
  return (
    <FlexBox height={200} justifyContent="center" alignItems="center" bg="#eee">
      <TextBox fontSize={32} fontWeight={700}>
        {title}
      </TextBox>
    </FlexBox>
  );
}
