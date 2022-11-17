import { GetServerSidePropsContext } from "next";
import { RootState, store } from "../store";

export interface AuthGetServerSideProps extends GetServerSidePropsContext {
  stores: RootState;
}

export const authGetServerSideProps = (getServerSideProps?: Function) => {
  const checkProps = async (ctx: AuthGetServerSideProps) => {
    let pageProps = {};

    const state = store.getState();

    if (!state.user.userInfo.isLoggedIn) {
      ctx.res.writeHead(302, {
        Location: "/",
      });
      ctx.res.end();
    }

    ctx.stores = state;

    if (getServerSideProps) {
      pageProps = await getServerSideProps(ctx);
    }

    return {
      props: {
        props: pageProps,
        serverStores: state,
      },
    };
  };

  return checkProps;
};
