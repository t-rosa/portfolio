import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Arrow from "../components/Arrow";
import Layout from "../components/Layout";
import banner from "../images/banner.png";

const Projects: NextPage = () => {
  return (
    <Layout direction="left">
      <Head>
        <title>Toma Rosa - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-[320px] min-h-[600px] overflow-hidden h-screen grid place-items-center relative">
        <svg
          className="hidden lg:block absolute top-56 right-[30%] -z-10"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="de316486-4a29-4312-bdfc-fbce2132a2c1"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
          />
        </svg>

        <Link href="https://janedoagency.com">
          <a target="_blank" rel="noreferrer">
            <Image
              src={banner}
              alt="Banière Jane Do Agency"
              className="border border-zinc-700 hover:border-[#c9a26f] duration-300 hover:shadow-xl hover:scale-105"
              width={600}
            />
          </a>
        </Link>
        <Arrow direction="up" href="" />
        <Arrow direction="right" href="contact" />
      </main>
    </Layout>
  );
};

export default Projects;
