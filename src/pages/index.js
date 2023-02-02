import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("inter");
  console.log(inter);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} m-auto`}>
        <Header />
        <div className="max-w-7xl m-auto">
          <div className="grid grid-cols-4 gap-8 mt-20">
            <Card username={"@nathanf"} />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
}
