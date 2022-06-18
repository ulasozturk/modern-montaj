import { Box, FlexBox, ImageBox, TextBox } from "./styled-components";

export function Hero() {
  return (
    <Box position="relative" height="90vh">
      <ImageBox width="100%" height="100%" style={{ objectFit: "cover" }} src="/hero-image.jpeg" />
      <FlexBox
        position="absolute"
        left={0}
        top={0}
        width="100%"
        height="100%"
        bg="#0004"
        alignItems="center"
      >
        <FlexBox ml="10%" p={20} column alignItems="flex-start">
          <TextBox width={["100%", "50%", "50%"]} fontSize={32} color="white">
            Enerji sektöründe ulusal ve uluslarası çözüm ortağınız
          </TextBox>
          <TextBox bg="white" mt={10} px={20} py={10}>
            Daha fazla
          </TextBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
}
