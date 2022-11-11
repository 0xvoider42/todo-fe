import InputField from "../../components/UI/InputField";

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.headers.cookie.split("token=", 2)[1];

  return {
    props: {
      token,
    },
  };
};

const EditTodoPage = ({ token }) => {
  return <InputField token={token} />;
};

export default EditTodoPage;
