import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Box } from "./styled-components";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box as="main" minHeight="100vh" boxShadow="0px 4px 8px 0px #ccc">
        {children}
      </Box>
      <Footer />
    </>
  );
}
