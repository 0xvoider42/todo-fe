import {
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import { api } from "../services/api";
import { store } from "../store/index";
import TopMenu from "../components/UI/TopMenu";
import { getCookie } from "cookies-next";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;

  return (
    <Provider store={store}>
      <CssVarsProvider>
        <QueryClientProvider client={queryClient}>
          <Stack spacing={1}>
            <TopMenu />
            <Component {...pageProps} />
          </Stack>
        </QueryClientProvider>
      </CssVarsProvider>
    </Provider>
  );
};

export default MyApp;
