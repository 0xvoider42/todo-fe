const GetATodo = () => {};

export const getStaticPaths = () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          todoId: "1",
        },
      },
    ],
  };
};

export const getStaticProps = (context) => {
  const todoId = context.params.todoId;

  return {
    props: {
      data: {
        id: todoId,
        title: "title",
        text: "text",
      },
    },
  };
};

export default GetATodo;
