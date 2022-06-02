import { useState } from "react";
import { Box, FlexBox, ImageBox, TextBox } from "./styled-components";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <Box as="nav" width="100%" boxShadow="0 2px 4px 0 rgba(0,0,0,0.2)">
      <FlexBox height="10vh" maxWidth={1200} mx="auto" px={20} overflow="hidden">
        <ImageBox src="/logo.png" height="10vh" mr={50} />
        <Box flex={1} />
        <FlexBox
          display={["none", "none", "flex"]}
          flexWrap="wrap"
          alignItems="stretch"
          height="100%"
        >
          <RowItem text="Anasayfa" />
          <RowItem text="Kurumsal" />
          <RowItem text="Faaliyet Alanlarımız" />
          <RowItem text="Hizmetlerimiz" />
          <RowItem text="Projelerimiz" />
          <RowItem text="İletişim" />
        </FlexBox>
        <FlexBox
          onClick={toggleMenu}
          pointer
          display={["flex", "flex", "none"]}
          width={40}
          p={10}
          height="100%"
          column
          justifyContent="center"
        >
          <Box width="100%" height="2px" my="2px" bg="#666" />
          <Box width="100%" height="2px" my="2px" bg="#666" />
          <Box width="100%" height="2px" my="2px" bg="#666" />
        </FlexBox>
      </FlexBox>
      <FlexBox display={isMenuOpen ? ["flex", "flex", "none"] : "none"} column alignItems="stretch">
        <ColumnItem text="Anasayfa" />
        <ColumnItem text="Kurumsal" />
        <ColumnItem text="Faaliyet Alanlarımız" />
        <ColumnItem text="Hizmetlerimiz" />
        <ColumnItem text="Projelerimiz" />
        <ColumnItem text="İletişim" />
      </FlexBox>
    </Box>
  );
}

function RowItem({ text }) {
  return (
    <FlexBox height="100%" alignItems="center" mx={10}>
      <TextBox fontSize={16} fontWeight={500}>
        {text}
      </TextBox>
    </FlexBox>
  );
}

function ColumnItem({ text }) {
  return (
    <FlexBox justifyContent="center" p={20}>
      <TextBox>{text}</TextBox>
    </FlexBox>
  );
}
