import { FlexBox, ImageBox, TextBox } from "../components/styled-components";
import { PageHeading } from "../components/pageHeading";

export default function Projects() {
  return (
    <FlexBox column>
      <PageHeading title="Projeler" />
      <FlexBox maxWidth={1200} mx="auto" p={20} column>
        <FlexBox flexWrap="wrap">
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
    </FlexBox>
  );
}
