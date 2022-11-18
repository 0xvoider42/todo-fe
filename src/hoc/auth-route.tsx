import { GetServerSidePropsContext } from "next";
import Router from "next/router";
import { getTodos } from "../services/queries/get-todos";
import { store } from "../store";

export interface AuthGetServerSidePropsContext
  extends GetServerSidePropsContext {
  data;
}

export const authGetServerSideProps = (getServerSideProps?: Function) => {
  const Wrapper = async (ctx: AuthGetServerSidePropsContext) => {
    const todos = await getTodos();

    const user = store.getState();
    const userState = user.user.userInfo.isLoggedIn;

    if (userState === false) {
      return Router.push("/auth");
    }

    ctx.data = todos.data;

    return {
      props: {
        todos: todos.data,
      },
    };
  };

  return Wrapper;
};
