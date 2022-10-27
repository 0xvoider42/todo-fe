import TopMenu from "../components/UI/TopMenu";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <TopMenu />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
