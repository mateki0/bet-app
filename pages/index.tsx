import Layout from 'Components/Layout';
import MiddleColumn from 'Components/MiddleColumn';
import SideBar from 'Components/SideBar';
import Head from 'next/head';

const Home = () => {
  return (
    <Layout>
      <SideBar isLeft headingText="Events" />
      <MiddleColumn />
      <SideBar headingText="Best Players" />
    </Layout>
  );
};
export default Home;
