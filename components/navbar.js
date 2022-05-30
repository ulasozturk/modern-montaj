import styled from "styled-components";
import { Box, ImageBox, TextBox } from "./styled-components";

const Button = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "0 20px",
});
const Text = styled(TextBox)({
  fontSize: 16,
  fontWeight: 500,
});

export function Navbar() {
  return (
    <Box width="100%" boxShadow="0 2px 4px 0 rgba(0,0,0,0.2)">
      <Box
        height="10%"
        display="flex"
        flexDirection="row"
        maxWidth={1200}
        mx="auto"
        px={20}
        overflow="hidden"
      >
        <ImageBox src="/logo.png" height="10vh" mr={50} />
        <Box flex={1} />
        <Button>
          <Text>Anasayfa</Text>
        </Button>
        <Button>
          <Text>Kurumsal</Text>
        </Button>
        <Button>
          <Text>Faaliyet Alanlarımız</Text>
        </Button>
        <Button>
          <Text>Hizmetlerimiz</Text>
        </Button>
        <Button>
          <Text>Projelerimiz</Text>
        </Button>
        <Button>
          <Text>İletişim</Text>
        </Button>
      </Box>
    </Box>
  );
}
