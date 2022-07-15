import type { NextPage } from "next";
import Head from "next/head";
import AnimatedBall from "../components/AnimatedBall";
import Arrow from "../components/Arrow";
import Layout from "../components/Layout";
import Image from "next/future/image";
import banner from "../images/banner.png";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Toma Rosa - Introduction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="grid h-screen overflow-hidden
        grid-cols-[4rem_1fr_1fr_4rem] sm:grid-cols-[8rem_1fr_1fr_8rem] lg:grid-cols-[10rem_1fr_1fr_10rem]
        grid-rows-[4rem_1fr_1fr_8rem] sm:grid-rows-[8rem_1fr_1fr_8rem] lg:grid-rows-[10rem_1fr_1fr_10rem]"
      >
        <Arrow direction="up" href="" />
        <Arrow direction="right" href="contact" />
        <section className="col-[2/4] row-[2/3] grid place-items-center">
          <h1 className="relative font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl border-b border-r border-dashed p-5">
            <AnimatedBall />
            Proj
            <span className="text-indigo-500">e</span>ct
          </h1>
        </section>
        <section className="col-[2/4] row-[3/4] grid place-items-center ">
          <Link href="https://janedoagency.com">
            <a
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:scale-105 lg:w-1/2 hover:border-[#c9a26f] border border-zinc-700 hover:shadow-xl"
            >
              <Image
                src={banner}
                alt="Banière de la société Jane Do Agency Toulouse"
              />
            </a>
          </Link>
        </section>
        <section className="col-[1/5] row-[4/5] grid place-items-center">
          <div className="flex items-center gap-3 text-2xl">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <Link href="https://github.com/t-rosa">
              <a
                target="_blank"
                rel="noreferrer"
                className="duration-300 hover:text-indigo-400 text-zinc-200 underline cursor-pointer"
              >
                Github
              </a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
