import Head from "next/head";
import { Card } from "../components/card";
import Image from "next/image";
import data from "./data.json";
import { useEffect, useState } from "react";
export default function Home() {
  const [timeframe, setTimeframe] = useState("weekly");

  const changeTimeframe = (frame) => {
    setTimeframe(frame);
  };
  return (
    <div className="h-full w-full desk:px-24 xs:p-4 desk:flex desk:items-center desk:justify-center">
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta
          name="description"
          content="Frontend Challenges Time Tracking Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="desk:flex desk:gap-12 desk:flex-row xs:flex xs:flex-col xs:gap-y-4 w-full">
        <aside className="z-10 bg-darkBlue rounded-xl">
          <div className="desk:py-8 desk:px-8 desk:pr-24  bg-myBlue rounded-xl xs:flex  xs:justify-center xs:items-center md:flex-col md:items-baseline md:justify-start">
            <div className="mb-1 xs:mr-5 w-[92px] h-[92px] border-4 relative rounded-full">
              <Image
                className="image"
                src="/image-jeremy.png"
                alt="Jeremy"
                width={92}
                height={92}
              />
            </div>

            <div className="pt-6 ">
              <span className="text-xs text-gray-300 font-normal">
                Report for
              </span>
              <h1 className="desk:text-4xl xs:text-2xl font-light mb-7">
                Jeremy Robson
              </h1>
            </div>
          </div>
          <div className="buttons pl-10  p-4 rounded-xl flex items-start bg-darkBlue w-full desk:flex-col xs:flex-row xs:justify-between  ">
            <button onClick={() => changeTimeframe("daily")}>Daily</button>
            <button onClick={() => changeTimeframe("weekly")}>Weekly</button>
            <button onClick={() => changeTimeframe("monthly")}>Monthly</button>
          </div>
          <div></div>
        </aside>
        <div className="w-full grid xs:grid-flow-row  desk:grid-flow-col desk:grid-cols-3 gap-4 desk:grid-rows-2">
          {data.map((datas) => (
            <Card
              key={datas.title}
              time={datas.timeframes}
              data={datas}
              timekey={timeframe}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
