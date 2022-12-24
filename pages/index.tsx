import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../public/banner.jpg";
import { AiFillDollarCircle, AiFillBank } from "react-icons/ai";
import { RiLuggageDepositFill } from "react-icons/ri";
import Schedule from "../components/Schedule";

const Home: NextPage<{ data: any }> = ({ data }: { data: any }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>pedroBet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Come to my store for great apparel!"
        />
        <meta property="og:title" content="Aposta Ganha Bônus 5" />
        <meta
          property="og:description"
          content="bônus grátis 5 reais aposta bet futebol campeonatos ligas barcelona real madrid green odds casa grana extra"
        />
        <meta property="og:url" content="https://myclothingstore.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center bg-orange-500">
        <header className="">
          <Image src={Banner} alt={""} layout="responsive" />
        </header>
        <section className="text-gray-600 body-font">
          {/* <Schedule schedule={data} /> */}
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
                FAÇA AQUI SUA PRIMEIRA APOSTA GRÁTIS
              </button>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-100">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-orange-500 mb-4">
                    <AiFillDollarCircle size="30" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Bônus sem Rollover
                  </h2>
                  <p className="leading-relaxed text-base">
                    Se sua aposta grátis de R$5 for vencedora, seu saque já está
                    liberado.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-100">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-orange-500 mb-4">
                    <RiLuggageDepositFill size="30" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Deposite a partir de R$1
                  </h2>
                  <p className="leading-relaxed text-base">
                    Aqui você começa a apostar com qualquer valor, até um real!
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg bg-slate-100">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-orange-500 mb-4">
                    <AiFillBank size="30" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Saques e depósitos via PIX
                  </h2>
                  <p className="leading-relaxed text-base">
                    Saque e depósito via PIX sem burocracia, dinheiro na sua
                    conta instantaneamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
