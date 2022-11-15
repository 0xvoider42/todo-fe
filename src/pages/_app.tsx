import {
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { getCookie } from "cookies-next";
import { Container } from "@mui/system";

import { api } from "../services/api";
import { store } from "../store/index";
import TopMenu from "../components/UI/TopMenu";
import { setUserToken } from "../components/features/authentication/userReducer";

const queryClient = new QueryClient();

const MyApp = ({ Component, token, pageProps }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  store.dispatch(setUserToken(token));

  return (
    <Provider store={store}>
      <CssVarsProvider>
        <QueryClientProvider client={queryClient}>
          <TopMenu />
          <Container maxWidth="md">
            <Stack spacing={1} padding={2}>
              <Component {...pageProps} />
            </Stack>
          </Container>
        </QueryClientProvider>
      </CssVarsProvider>
    </Provider>
  );
};

MyApp.getInitialProps = async ({ ctx }) => {
  const token = getCookie("token", { req: ctx.req, res: ctx.res });

  return {
    token,
  };
};

export default MyApp;
