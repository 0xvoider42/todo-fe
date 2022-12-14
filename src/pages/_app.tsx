import {
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { Container } from "@mui/system";
import { getCookie } from "cookies-next";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "material-ui-snackbar-provider";

import { api } from "../services/api";
import { setUserToken } from "../store/authentication/user-reducer";
import { store } from "../store/index";
import TopMenu from "../components/todo-menu/top-menu";

const queryClient = new QueryClient();

const MyApp = ({ Component, token, pageProps }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  store.dispatch(setUserToken(token));

  return (
    <Provider store={store}>
      <CssVarsProvider>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider SnackbarProps={{ autoHideDuration: 2500 }}>
            <TopMenu />
            <Container maxWidth="md">
              <Stack spacing={1} padding={2}>
                <Component {...pageProps} />
              </Stack>
            </Container>
          </SnackbarProvider>
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
