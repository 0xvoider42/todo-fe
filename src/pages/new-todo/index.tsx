import NewTodo from "../../components/NewTodo/NewTodo";

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.headers.cookie.split("token=", 2)[1];

  return {
    props: {
      token,
    },
  };
};

const NewTodoPage = ({ token }) => {
  return <NewTodo token={token} />;
};

export default NewTodoPage;
