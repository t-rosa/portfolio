import type { NextPage } from "next";
import Head from "next/head";
import AnimatedBall from "../components/AnimatedBall";
import Arrow from "../components/Arrow";
import Layout from "../components/Layout";

const Introduction: NextPage = () => {
  return (
    <Layout direction="left">
      <Head>
        <title>Toma Rosa - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-[320px] min-h-[600px] overflow-hidden h-screen grid place-items-center relative">
        <h1 className="relative p-4 border-b border-r text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light border-dashed">
          <AnimatedBall />
          Toma Ros<span className="text-indigo-500">a</span>
        </h1>
        <Arrow direction="up" href="" />
        <Arrow direction="right" href="skills" />
      </main>
    </Layout>
  );
};

export default Introduction;
