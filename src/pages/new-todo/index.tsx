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
  console.log(token);
  return <NewTodo />;
};

export default NewTodoPage;
