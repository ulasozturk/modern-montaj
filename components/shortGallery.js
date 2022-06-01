import { FlexBox, TextBox } from "./styled-components";
import { Gallery } from "./gallery";

export function ShortGallery() {
  return (
    <FlexBox width="100%" bg="#f2f2f2">
      <FlexBox column alignItems="stretch" maxWidth={1200} mx="auto" p={10}>
        <TextBox as="h2" mt={50} mb={30} fontSize={32} textAlign="center">
          Fotoğraflar
        </TextBox>
        <TextBox fontSize={20} textAlign="center" p={10}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sit suscipit mollitia,
          vero, tempore vel debitis nisi animi quas adipisci cum neque omnis reprehenderit
          aspernatur doloremque.
        </TextBox>
        <TextBox textAlign="center" fontSize={18} fontWeight={500}>
          Devamını gör
        </TextBox>
        <Gallery data={data} mt={20} />
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
];
