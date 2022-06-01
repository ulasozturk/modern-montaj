import { FlexBox, ImageBox, TextBox } from "./styled-components";

export function References() {
  return (
    <FlexBox width="100%" bg="#f2f2f2">
      <FlexBox column maxWidth={1200} mx="auto">
        <TextBox as="h2" mt={50} mb={30} fontSize={32} textAlign="center">
          Referanslar
        </TextBox>
        <TextBox fontSize={20} textAlign="center" p={10}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sit suscipit mollitia,
          vero, tempore vel debitis nisi animi quas adipisci cum neque omnis reprehenderit
          aspernatur doloremque.
        </TextBox>
        <TextBox textAlign="center" fontSize={18} fontWeight={500}>
          Devamını gör
        </TextBox>
        <FlexBox flexWrap="wrap">
          <Item url="https://www.freepnglogos.com/uploads/audi-logo-0.gif" />
          <Item url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mercedes_benz_logo1989.png/800px-Mercedes_benz_logo1989.png" />
          <Item url="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19701.png" />
          <Item url="https://seeklogo.com/images/P/porsche-logo-5995000C95-seeklogo.com.png" />
        </FlexBox>
      </FlexBox>
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
