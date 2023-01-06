import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../public/banner.jpg";

const Home: NextPage<{ data: any }> = ({ data }: { data: any }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>jpGreens</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Cadastre-se!" />
        <meta property="og:title" content="Cadastre-se já e aproveite" />
        <meta
          property="og:description"
          content="5 reais futebol campeonatos ligas barcelona real madrid grana extra"
        />
        <meta property="og:url" content="https://jpgreens.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center bg-orange-500">
        <header className="">
          <Image src={Banner} alt={""} layout="responsive" />
        </header>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto mt-10">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <button
                onClick={() =>
                  window.open(
                    "https://register.apostaganha.bet/?cadastro=pedcardoso"
                  )
                }
                className="w-2/3 lg:w-1/3 uppercase shadow-lg text-2xl font-bold tracking-wide bg-orange-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:bg-green-500 hover:scale-105 transition-all"
              >
                FAÇA SEU CADASTRO E RECEBA SEU BÔNUS
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
