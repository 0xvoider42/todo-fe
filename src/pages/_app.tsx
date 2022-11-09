import {
  Experimental_CssVarsProvider as CssVarsProvider,
  Stack,
} from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import { api } from "../services/api";
import { store } from "../store/index";
import TopMenu from "../components/UI/TopMenu";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  let token: string;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  console.log(api.defaults.headers);

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
