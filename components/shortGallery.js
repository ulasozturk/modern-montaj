import { Box, TextBox } from "./styled-components";
import { Gallery } from "./gallery";

export function ShortGallery() {
  return (
    <Box maxWidth={1200} mx="auto" p={10}>
      <TextBox as="h2" mt={50} mb={30} fontSize={32} textAlign="center">
        Fotoğraflar
      </TextBox>
      <TextBox fontSize={20} textAlign="center" p={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sit suscipit mollitia, vero,
        tempore vel debitis nisi animi quas adipisci cum neque omnis reprehenderit aspernatur
        doloremque.
      </TextBox>
      <Gallery data={data} mt={20} />
    </Box>
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
