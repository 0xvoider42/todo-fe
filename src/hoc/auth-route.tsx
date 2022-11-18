import { GetServerSidePropsContext } from "next";
import { store } from "../store";
import { checkTokenValidity } from "../utils/token-validity-check";

export interface AuthGetServerSidePropsContext
  extends GetServerSidePropsContext {
  data;
}

export const authGetServerSideProps = (getServerSideProps?: Function) => {
  const Wrapper = async (ctx: AuthGetServerSidePropsContext) => {
    let pageProps = {};

    const user = await store.getState();
    const userToken = user.user.userToken;

    if (!checkTokenValidity(userToken)) {
      ctx.res.writeHead(301, {
        Location: "/auth",
        "Cache-Control": "no-cache",
      });

      ctx.res.end();

      return {
        props: {},
      };
    }

    ctx.data = user;

    if (getServerSideProps) {
      pageProps = await getServerSideProps(ctx.data);
    }

    return { ...pageProps };
  };

  return Wrapper;
};
