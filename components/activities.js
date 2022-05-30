import { Box, FlexBox, ImageBox, TextBox } from "./styled-components";

export function Activities() {
  return (
    <Box maxWidth={1200} mx="auto">
      <TextBox as="h2" my={50} fontSize={32} textAlign="center">
        Faaliyet Alanlarımız
      </TextBox>
      <FlexBox justifyContent="space-between" flexWrap="wrap">
        <FlexBox width={[1, 1 / 2, 1 / 4]} column alignItems="center" p={20}>
          <ImageBox width={80} height={80} src="/icon-placeholder.jpg" />
          <TextBox mt={10} fontSize={24} fontWeight={500}>
            Enerji üretimi
          </TextBox>
        </FlexBox>
        <FlexBox width={[1, 1 / 2, 1 / 4]} column alignItems="center" p={20}>
          <ImageBox width={80} height={80} src="/icon-placeholder.jpg" />
          <TextBox mt={10} fontSize={24} fontWeight={500}>
            Enerji üretimi
          </TextBox>
        </FlexBox>
        <FlexBox width={[1, 1 / 2, 1 / 4]} column alignItems="center" p={20}>
          <ImageBox width={80} height={80} src="/icon-placeholder.jpg" />
          <TextBox mt={10} fontSize={24} fontWeight={500}>
            Enerji üretimi
          </TextBox>
        </FlexBox>
        <FlexBox width={[1, 1 / 2, 1 / 4]} column alignItems="center" p={20}>
          <ImageBox width={80} height={80} src="/icon-placeholder.jpg" />
          <TextBox mt={10} fontSize={24} fontWeight={500}>
            Enerji üretimi
          </TextBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
}
