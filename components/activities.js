import { Box, FlexBox, ImageBox, TextBox } from "./styled-components";

export function Activities() {
  return (
    <Box maxWidth={1200} mx="auto" px={10}>
      <TextBox as="h3" mt={50} mb={30} fontSize={32} textAlign="center">
        Faaliyet Alanlarımız
      </TextBox>
      <TextBox fontSize={20} textAlign="center" p={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia soluta officia velit
        alias ipsam nostrum delectus molestias excepturi.
      </TextBox>
      <FlexBox mt={20} justifyContent="space-between" flexWrap="wrap">
        <Item item={{ title: "Enerji Üretimi", image: "/icon-placeholder.jpg" }} />
        <Item item={{ title: "Enerji Üretimi", image: "/icon-placeholder.jpg" }} />
        <Item item={{ title: "Enerji Üretimi", image: "/icon-placeholder.jpg" }} />
        <Item item={{ title: "Enerji Üretimi", image: "/icon-placeholder.jpg" }} />
      </FlexBox>
    </Box>
  );
}

function Item({ item }) {
  return (
    <FlexBox p={20} width={[1, 1 / 2, 1 / 4]} column alignItems="center">
      <ImageBox width={80} height={80} src={item.image} />
      <TextBox mt={10} fontSize={24} fontWeight={500}>
        {item.title}
      </TextBox>
    </FlexBox>
  );
}
