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

const queryClient = new QueryClient();

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.headers.cookie.split("token=", 2)[1];

  return {
    props: {
      token,
    },
  };
};

const MyApp = ({ Component, pageProps, token }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;

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

export default MyApp;
