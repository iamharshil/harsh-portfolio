// cSpell:words harshil chudasama
import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/aboutus";
import MastHead from "../components/masthead";
// import Skills from "../components/skills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Harshil Chudasama</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MastHead />
      <AboutUs />
      {/* <Skills /> */}
      {/* <Skills /> */}
    </div>
  );
};

export default Home;
