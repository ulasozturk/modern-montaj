import { useState } from "react";
import styled from "styled-components";
import { Box, FlexBox, ImageBox, TextBox } from "./styled-components";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <Box width="100%" boxShadow="0 2px 4px 0 rgba(0,0,0,0.2)">
      <FlexBox height="10vh" maxWidth={1200} mx="auto" px={20} overflow="hidden">
        <ImageBox src="/logo.png" height="10vh" mr={50} />
        <Box flex={1} />
        <FlexBox
          as="nav"
          display={["none", "none", "flex"]}
          flexWrap="wrap"
          alignItems="stretch"
          height="100%"
        >
          <RowItem text="Anasayfa" />
          <RowItem
            text="Kurumsal"
            dropdown={[{ text: "Hakkımızda" }, { text: "Misyon ve Vizyon" }, { text: "Kariyer" }]}
          />
          <RowItem
            text="Faaliyet Alanlarımız"
            dropdown={[
              { text: "Enerji Üretimi" },
              { text: "Endüstriyel Tesisler" },
              { text: "Enerji Dağıtımı" },
              { text: "Enerji İletimi" },
            ]}
          />
          <RowItem
            text="Hizmetlerimiz"
            dropdown={[
              { text: "Mühendislik" },
              { text: "Montaj" },
              { text: "Eğitim" },
              { text: "Bakım ve Servis" },
            ]}
          />
          <RowItem
            text="Projelerimiz"
            dropdown={[{ text: "Referanslarımız" }, { text: "Projelerimiz" }, { text: "Galeri" }]}
          />
          <RowItem
            text="İletişim"
            dropdown={[{ text: "Konum" }, { text: "Telefon" }, { text: "E-posta" }]}
          />
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
        <ColumnItem
          text="Kurumsal"
          dropdown={[{ text: "Hakkımızda" }, { text: "Misyon ve Vizyon" }, { text: "Kariyer" }]}
        />
        <ColumnItem
          text="Faaliyet Alanlarımız"
          dropdown={[
            { text: "Enerji Üretimi" },
            { text: "Endüstriyel Tesisler" },
            { text: "Enerji Dağıtımı" },
            { text: "Enerji İletimi" },
          ]}
        />
        <ColumnItem
          text="Hizmetlerimiz"
          dropdown={[
            { text: "Mühendislik" },
            { text: "Montaj" },
            { text: "Eğitim" },
            { text: "Bakım ve Servis" },
          ]}
        />
        <ColumnItem
          text="Projelerimiz"
          dropdown={[{ text: "Referanslarımız" }, { text: "Projelerimiz" }, { text: "Galeri" }]}
        />
        <ColumnItem
          text="İletişim"
          dropdown={[{ text: "Konum" }, { text: "Telefon" }, { text: "E-posta" }]}
        />
      </FlexBox>
    </Box>
  );
}

const RowItemContainer = styled(FlexBox)({
  "&:hover > .link": { backgroundColor: "#eee" },
  div: { pointerEvents: "none" },
  "&:hover > div": { pointerEvents: "auto", opacity: 1 },
  "&:hover > div > .dropText:hover": { backgroundColor: "#f2f2f2" },
  alignItems: "center",
});

function RowItem({ text, dropdown }) {
  return (
    <RowItemContainer>
      <FlexBox className="link" p={10} alignItems="center">
        <TextBox fontSize={16} fontWeight={500}>
          {text}
        </TextBox>
        {!!dropdown && (
          <FlexBox>
            <span class="material-icons">expand_more</span>
          </FlexBox>
        )}
      </FlexBox>
      {!!dropdown && (
        <FlexBox
          position="absolute"
          top="8vh"
          zIndex={1}
          opacity={0}
          column
          bg="white"
          p={10}
          boxShadow="2px 3px 5px 0px rgba(0,0,0,0.3)"
          style={{ transition: "opacity 150ms ease-in-out" }}
        >
          {dropdown.map((item) => (
            <TextBox className="dropText" key={item.text} p={10}>
              {item.text}
            </TextBox>
          ))}
        </FlexBox>
      )}
    </RowItemContainer>
  );
}

function ColumnItem({ text, dropdown }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      p={20}
      onClick={() => setDropdownVisible((s) => !s)}
    >
      <FlexBox alignItems="center">
        <TextBox fontSize={16} fontWeight={500}>
          {text}
        </TextBox>
        {!!dropdown && (
          <FlexBox>
            <span className="material-icons">expand_more</span>
          </FlexBox>
        )}
      </FlexBox>
      {!!dropdown && !!dropdownVisible && (
        <FlexBox flexDirection="column" alignItems="center" p={10}>
          {dropdown.map((item) => (
            <TextBox p={10} columndropdownitem>
              {item.text}
            </TextBox>
          ))}
        </FlexBox>
      )}
    </FlexBox>
  );
}
