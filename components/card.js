import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Card = ({ data, timekey, time }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    switch (timekey) {
      case "daily":
        setDate("Day");
        break;
      case "weekly":
        setDate("Week");
        break;
      case "monthly":
        setDate("Month");
        break;
      default:
        break;
    }
  }, [timekey]);
  return (
    <div
      className={`relative text-black w-full h-full overflow-hidden bg-${data.background}  rounded-xl `}
    >
      <div className="w-[76px] h-[77px] ml-auto pr-2 ">
        <Image src={data.image} width="100%" height="100%" alt="icon" />
      </div>
      <div className="bg-darkBlue cursor-pointer hover:bg-myBlue h-full box-border  px-6 pt-3 sticky -mt-6 flex  flex-col rounded-xl ">
        <div className="flex justify-between items-center w-full text-center ">
          <h1 className="text-white ">{data.title}</h1>
          <div className="w-[24px]">
            <Image
              src={"/icon-ellipsis.svg"}
              objectFit="contain"
              width="100%"
              height="100%"
              alt="ellipsis"
            />
          </div>
        </div>
        <div className="desk:pt-4 xs:pt-0 xs:pb-8 desk:pb-0 xs:flex desk:inline-block desk:justify-start desk:items-start xs:justify-between xs:items-center">
          <h2 className="text-white xs:text-3xl desk:text-5xl font-light">
            {time[timekey].current + "hrs"}
          </h2>
          <h6 className="pt-2 font-light text-sm text-gray-400">
            {"Last " + date + " - " + time[timekey].previous + "hrs"}
          </h6>
        </div>
      </div>
    </div>
  );
};
