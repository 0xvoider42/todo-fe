import { Container } from "@mui/material";
import TopMenu from "../components/UI/TopMenu";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Container maxWidth="md">
          <TopMenu />
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </div>
  );
};

export default MyApp;
