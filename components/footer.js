import { FlexBox, ImageBox, TextBox } from "./styled-components";

export function Footer() {
  return (
    <FlexBox as="footer" width="100%" bg="#dedede" column>
      <FlexBox maxWidth={1200} flex={1} mx="auto" flexWrap="wrap" px={20} py={100}>
        <FlexBox flexBasis={["100%", "50%", "33.33%"]} column p={20}>
          <ImageBox src="/logo.png" width="100%" style={{ backgroundColor: "#e6e6e6" }} />
          <TextBox mt={20} textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque qui
            consectetur temporibus quae fuga, omnis dicta enim accusamus amet nesciunt ratione
            impedit iste sequi, doloribus dolores blanditiis voluptas ipsam.
          </TextBox>
        </FlexBox>
        <FlexBox flexBasis={["100%", "50%", "33.33%"]} column p={20} alignItems="center">
          <FlexBox column>
            <TextBox mb={20} fontSize={24} fontWeight={500}>
              Faaliyet Alanlarımız
            </TextBox>
            <TextBox my={10}>Faaliyet 1</TextBox>
            <TextBox my={10}>Faaliyet 2</TextBox>
            <TextBox my={10}>Faaliyet 3</TextBox>
            <TextBox my={10}>Faaliyet 4</TextBox>
            <TextBox my={10}>Faaliyet 5</TextBox>
            <TextBox my={10}>Faaliyet 6</TextBox>
          </FlexBox>
        </FlexBox>
        <FlexBox flexBasis={["100%", "50%", "33.33%"]} column p={20}>
          <TextBox mb={20} fontSize={24} fontWeight={500}>
            İletişim
          </TextBox>
          <TextBox my={10}>
            Abdurrahmangazi Mah Ebubekir Cad Betul Sok No:2 Tuna Is Merkezi D: 6 Sancaktepe -
            Istanbul
          </TextBox>
          <TextBox my={10}>0 507 488 41 82 | 0 534 893 70 02</TextBox>
          <TextBox my={10}>info@tanselenerji.com.tr</TextBox>
        </FlexBox>
      </FlexBox>
      <FlexBox width="100%" bg="#333">
        <FlexBox
          flex={1}
          height={60}
          maxWidth={1200}
          mx="auto"
          px={20}
          alignItems="center"
          justifyContent="space-between"
        >
          <TextBox color="#ddd">Modern Montaj 2022 - Tüm hakları saklıdır.</TextBox>
          <TextBox color="#aaa">Web Tasarım: Ulaş Öztürk</TextBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
