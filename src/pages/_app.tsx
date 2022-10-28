import { Container } from "@mui/material";
import TopMenu from "../components/UI/TopMenu";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Container maxWidth="md">
        {" "}
        <TopMenu />
        <Component {...pageProps} />
      </Container>
    </div>
  );
};

export default MyApp;
