import { FlexBox, ImageBox } from "../components/styled-components";
import { PageHeading } from "../components/pageHeading";

export default function Gallery() {
  return (
    <FlexBox column>
      <PageHeading title="Galeri" />
      <FlexBox maxWidth={1200} mx="auto" p={20} flexWrap="wrap">
        {data.map((item, index) => (
          <FlexBox key={index} p={10} flexBasis={["100%", "50%", "33.33%"]}>
            <ImageBox src={item} width="100%" height="100%" />
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
}

const data = [
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
  "/gallery.jpg",
];
