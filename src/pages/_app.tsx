import {
  Container,
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import TopMenu from "../components/UI/TopMenu";
import { store } from "../store/index";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default MyApp;
