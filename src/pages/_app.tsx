import {
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { getCookie } from "cookies-next";
import { Container } from "@mui/system";
import App from "next/app";

import { api } from "../services/api";
import { store } from "../store/index";
import TopMenu from "../components/UI/TopMenu";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;

  const addToken = (payload) => ({ type: "GET_TOKEN", payload });

  const token = store.dispatch(addToken(getCookie("token")));

  return (
    <Provider store={store}>
      <CssVarsProvider>
        <QueryClientProvider client={queryClient}>
          <TopMenu token={token} />
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps: any = {};

  if (Component.getInitialProps) {
    pageProps = await App.getInitialProps(ctx);
  }

  const token = getCookie("token", { req: ctx.req, res: ctx.res });

  return {
    props: {
      ...pageProps,
      token,
    },
  };
};

export default MyApp;
