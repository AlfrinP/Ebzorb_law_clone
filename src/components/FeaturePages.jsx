import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import pdf from "../assets/feature/pdf.svg";
import sample from "../assets/feature/sample.jpg";
import Header from "./Header";

function FeaturePages() {
  const [arrow, setArrow] = useState(false);
  const data = [
    {
      img: sample,
      title: "Comprehensive Civil Exam Coaching Material",
      list: [
        "In-depth coverage of key topics in Mathematics.",
        "Thorough explanations of complex Physics concepts.",
        "Detailed analysis of important Chemistry principles.",
        "Comprehensive study of Biology topics relevant to civil exams.",
        "Effective strategies for acing History questions.",
        "Geographical concepts crucial for Geography questions.",
        "Economics principles essential for civil service exams.",
        "Political Science theories explained for better understanding.",
      ],
      pdf: [
        {
          img: pdf,
          text: "Q Bank",
        },
      ],
    },
    {
      img: sample,
      title: "Effective Coaching for Civil Services Aspirants",
      list: [
        "Advanced problem-solving techniques for Mathematics.",
        "Practical applications of Physics theories.",
        "Chemistry experiments to reinforce learning.",
        "Interactive Biology sessions for better retention.",
        "Historical insights to prepare for History section.",
        "Geographical concepts crucial for Geography questions.",
        "Economics principles essential for civil service exams.",
        "Political Science theories explained for better understanding.",
      ],
      pdf: [
        {
          img: pdf,
          text: "Q Bank",
        },
      ],
    },
    {
      img: sample,
      title: "Effective Coaching for Civil Services Aspirants",
      list: [
        "Advanced problem-solving techniques for Mathematics.",
        "Practical applications of Physics theories.",
        "Chemistry experiments to reinforce learning.",
        "Interactive Biology sessions for better retention.",
        "Historical insights to prepare for History section.",
        "Geographical concepts crucial for Geography questions.",
        "Economics principles essential for civil service exams.",
        "Political Science theories explained for better understanding.",
      ],
      pdf: [
        {
          img: pdf,
          text: "Q Bank",
        },
      ],
    },
    {
      img: sample,
      title: "Effective Coaching for Civil Services Aspirants",
      list: [
        "Advanced problem-solving techniques for Mathematics.",
        "Practical applications of Physics theories.",
        "Chemistry experiments to reinforce learning.",
        "Interactive Biology sessions for better retention.",
        "Historical insights to prepare for History section.",
        "Geographical concepts crucial for Geography questions.",
        "Economics principles essential for civil service exams.",
        "Political Science theories explained for better understanding.",
      ],
      pdf: [
        {
          img: pdf,
          text: "Q Bank",
        },
      ],
    },
  ];

  return (
    <div className="w-full center flex-col py-10 gap-3">
      <Header name="The Edzorb Law Difference" />
      <ul className=" w-full max-w-7xl px-[50px] center gap-5 flex-col">
        {data.map((item, index) => (
          <li
            className="rounded-[50px] py-14 px-16 flex even:flex-row-reverse justify-center items-start gap-14 h-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            key={index}
          >
            <div className="w-[450px] flex justify-center items-center">
              <img
                alt="Feature Image"
                src={item.img}
                className="rounded-[50px] w-full shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px]"
              />
            </div>
            <div className="w-full flex justify-center h-full items-start gap-3 flex-col mt-5">
              <div className="text-3xl font-medium text-[#173947]">
                {item.title}
              </div>
              <ul className="list-disc">
                {item.list.map((sentence, sentenceIndex) => (
                  <li className="text-lg text-[#777777]" key={sentenceIndex}>
                    {sentence}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className=" text-white flex justify-between items-center w-fit gap-1 font-medium rounded-xl text-lg py-3 px-2 bg-[#01324e]"
                onClick={() => setArrow(!arrow)}
              >
                {arrow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                <span>Download Free</span>
                <CloudDownloadIcon />
              </button>
              {arrow ? (
                <ul className="flex items-center justify-center mt-5 gap-1">
                  {item.pdf.map((pdfItem, index) => (
                    <li
                      className="flex items-center justify-center flex-col gap-1 cursor-pointer"
                      key={index}
                    >
                      <img src={pdfItem.img} className="w-14" alt="PDF" />{" "}
                      <span className="text-xl font-medium text-[#4b4b4b]">
                        {pdfItem.text}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturePages;
