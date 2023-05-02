import Image from "next/image";
import React, { FC } from "react";

interface Props {
  title: string;
  date: string;
  desc: string;
  img?: string;
  index?: number;
  isFirst?: boolean;
}

const TimelineElement: FC<Props> = ({
  title,
  desc,
  img,
  date,
  index,
  isFirst,
}) => {
  return (
    <div
      className={`w-1/2 relative text-white bg-slate-400 bg-opacity-10 p-5 border border-gray-800 flex flex-col gap-3  ${
        index ? "self-end left-5" : "self-start right-5"
      }
      `}
    >
      <span className="text-green-300">{date}</span>
      <h1>{title}</h1>
      {img && (
        <div className="h-64 w-100 relative">
          <Image
            src={`/img/${img}`}
            alt={title}
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />
        </div>
      )}
      <p>{desc}</p>
    </div>
  );
};

export default TimelineElement;
