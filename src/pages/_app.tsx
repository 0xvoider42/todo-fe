import {
  Container,
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import TopMenu from "../components/UI/TopMenu";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container maxWidth="md">
      <CssVarsProvider>
        <QueryClientProvider client={queryClient}>
          <Stack spacing={2}>
            <TopMenu />
            <Component {...pageProps} />
          </Stack>
        </QueryClientProvider>
      </CssVarsProvider>
    </Container>
  );
};

export default MyApp;
