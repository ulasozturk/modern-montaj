import { FlexBox, ImageBox } from "./styled-components";

export function Gallery({ data, ...rest }) {
  return (
    <FlexBox flexWrap="wrap" {...rest}>
      {data.map((item, index) => (
        <FlexBox key={index} p={10} flexBasis={["100%", "50%", "33.33%"]}>
          <ImageBox src={item} width="100%" height="100%" />
        </FlexBox>
      ))}
    </FlexBox>
  );
}
