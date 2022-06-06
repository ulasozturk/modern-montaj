import Link from "next/link";
import { FlexBox, ImageBox, TextBox } from "./styled-components";

export function Projects() {
  return (
    <FlexBox column alignItems="center" maxWidth={1200} mx="auto" p={20}>
      <TextBox as="h2" mt={50} mb={30} fontSize={32} textAlign="center">
        Projeler
      </TextBox>
      <TextBox fontSize={20} textAlign="center" p={10}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eum optio dolore? Pariatur
        facere nobis numquam necessitatibus.
      </TextBox>
      <TextBox textAlign="center" fontSize={18} fontWeight={500}>
        <Link href="/projects">
          <a>Devamını gör</a>
        </Link>
      </TextBox>
      <FlexBox mt={20} flexWrap="wrap">
        {[1, 2, 3, 4, 5].map((i, index) => (
          <FlexBox
            key={index}
            column
            alignItems="center"
            flexBasis={["100%", "50%", "33.33%"]}
            p={20}
          >
            <ImageBox src="/icon-placeholder.jpg" width="100%" />
            <TextBox mt={10} fontSize={20} fontWeight={500}>
              Proje {index + 1}
            </TextBox>
            <TextBox mt={10} fontSize={14} textAlign="center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </TextBox>
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
}
