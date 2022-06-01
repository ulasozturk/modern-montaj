import { FlexBox, ImageBox } from "./styled-components";

export function References() {
  return (
    <FlexBox maxWidth={1200} mx="auto" bg="#f2f2f2" flexWrap="wrap">
      <Item url="https://www.freepnglogos.com/uploads/audi-logo-0.gif" />
      <Item url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mercedes_benz_logo1989.png/800px-Mercedes_benz_logo1989.png" />
      <Item url="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19701.png" />
      <Item url="https://seeklogo.com/images/P/porsche-logo-5995000C95-seeklogo.com.png" />
    </FlexBox>
  );
}

function Item({ url }) {
  return (
    <ImageBox
      src={url}
      width={["100%", "50%", "25%"]}
      height={300}
      p={20}
      style={{ objectFit: "contain" }}
    />
  );
}
