import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Card from "@/components/Card";
import datas from "@/data";
import Overview from "@/components/Overview";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ cards, overview }) {
  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
        <meta name="description" content="simple dashboard by ray" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="w-10/12 m-auto max-w-7xl">
          <Header />
          <div className="grid grid-cols-1 gap-8 mt-16 ml-auto mr-auto place-content-between sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  username={card.username}
                  image={card.icon}
                  followers={
                    card.followers > 9999
                      ? card.followers / 1000 + "k"
                      : card.followers
                  }
                  growth={card.growth}
                  isup={card.isUp}
                  type={card.type}
                  name={card.name}
                />
              );
            })}
          </div>
          <h1 className="mt-16 mb-6 text-2xl font-bold md:text-3xl text-slate-500">
            Overview - Today
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-4 ml-auto mr-auto place-content-between sm:grid-cols-2 xl:grid-cols-4">
            {overview.map((card, index) => {
              return (
                <Overview
                  key={index}
                  name={card.name}
                  image={card.icon}
                  sectionName={card.sectionName}
                  count={
                    card.count > 9999 ? card.count / 1000 + "k" : card.count
                  }
                  percentage={card.percentage}
                  isUp={card.isUp}
                />
              );
            })}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { cards: datas.data, overview: datas.overview },
  };
}
