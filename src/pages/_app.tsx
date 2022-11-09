import {
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
