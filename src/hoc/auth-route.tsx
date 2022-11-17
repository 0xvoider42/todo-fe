import { is } from "immer/dist/internal";
import { GetServerSidePropsContext } from "next";
import { RootState, store } from "../store";

export interface AuthGetServerSidePropsContext
  extends GetServerSidePropsContext {
  stores: RootState;
}

export const authGetServerSideProps = (getServerSideProps?: Function) => {
  const wrapper = async (ctx: AuthGetServerSidePropsContext) => {
    let pageProps = {};
    const stores = store.getState();

    if (stores.user.userInfo.isLoggedIn === false) {
      return {
        redirect: {
          destination: "/auth",
        },
      };
    }

    ctx.stores = stores;

    if (getServerSideProps) {
      pageProps = await getServerSideProps(ctx);
    }

    return {
      props: {
        props: pageProps,
        serverStores: stores,
      },
    };
  };

  return wrapper;
};
