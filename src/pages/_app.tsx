import {
  Container,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import ThemeSwitcher from "../components/UI/ThemeSwitcher";
import TopMenu from "../components/UI/TopMenu";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <CssVarsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeSwitcher />
        <Container maxWidth="md">
          <TopMenu />
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </CssVarsProvider>
  );
};

export default MyApp;
