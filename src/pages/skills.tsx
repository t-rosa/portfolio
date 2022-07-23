import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AnimatedBall from "../components/AnimatedBall";
import Arrow from "../components/Arrow";
import Layout from "../components/Layout";

const Skills: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Toma Rosa - Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="grid h-screen overflow-hidden
        grid-cols-[4rem_1fr_1fr_4rem] sm:grid-cols-[8rem_1fr_1fr_8rem] lg:grid-cols-[10rem_1fr_1fr_10rem]
        grid-rows-[4rem_1fr_1fr_4rem] sm:grid-rows-[8rem_1fr_1fr_8rem] lg:grid-rows-[10rem_1fr_1fr_10rem]"
      >
        <Arrow direction="left" href="" />
        <Arrow direction="down" href="contact" />
        <section className="col-[1/5] row-[2/3] lg:col-[2/3] lg:row-[2/3] justify-self-center z-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <h2 className="">Status: Sandwich course</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <h2 className="">
              company:&nbsp;
              <Link href="https://www.iread-geospace.io/">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-200 underline cursor-pointer"
                >
                  Iread Geospace
                </a>
              </Link>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <h2>
              Last project:&nbsp;
              <Link href="https://janedoagency.com">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-200 underline cursor-pointer"
                >
                  janedoagency.com
                </a>
              </Link>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <h2>
              <Link href="https://github.com/t-rosa">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-200 underline cursor-pointer"
                >
                  Github
                </a>
              </Link>
            </h2>
          </div>
        </section>
        <section className="col-[2/4] row-[2/4] grid place-items-center  min-w-[180px]">
          <h1 className="relative font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl border-b border-l border-dashed p-5">
            <AnimatedBall />
            Toma Ros
            <span className="text-indigo-500">a</span>
          </h1>
        </section>
      </main>
    </Layout>
  );
};

export default Skills;
