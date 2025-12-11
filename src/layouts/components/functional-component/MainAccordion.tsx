import { markdownify } from "@/lib/utils/textConverter";
import React, { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const MainAccordion = ({ faqs }: { faqs: any }) => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <section className="section pt-0">
      <div className="container">
        <div className="mb-10">
          <h2
            className="text-center pb-4"
            data-aos="fade-up-sm"
            dangerouslySetInnerHTML={{ __html: markdownify(faqs.title) }}
          />
        </div>

        <div className="row justify-center mb-14">
          <div className="col-12 bg-light rounded-lg p-14">
            {faqs.faqs.map((f: any, i: number) => (
              <AccordionItem
                key={i}
                isActive={activeTab === i}
                question={f.question}
                answer={f.answer}
                onClick={() => {
                  activeTab === i ? setActiveTab(null) : setActiveTab(i);
                }}
                isLast={i === faqs.faqs.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="px-6 py-2 border border-border rounded-full w-fit mx-auto">
          <p className="text-center text-lg">
            Don’t find the answer? We can help.
            <span className="ml-2">
              <a href="/contact" className="text-secondary">
                Click here
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export const AccordionItem = ({
  isActive,
  question,
  answer,
  onClick,
  isLast,
}: {
  isActive: any;
  question: any;
  answer: any;
  onClick: any;
  isLast: any;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`accordion ${isActive ? "active" : ""}`}>
      <button className="accordion-header" onClick={onClick}>
        <span className="text-left">{question}</span>
        <div
          className={`${isActive ? "bg-secondary text-text-light" : "bg-body text-text-dark"
            } rounded-full text-sm p-2 transition-colors duration-300`}
        >
          {isActive ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <div
        ref={contentRef}
        className={`accordion-content transition-all duration-300 ease-in-out ${isLast && isActive ? 'pb-6' : ''}`}
        style={{
          maxHeight: isActive ? "2000px" : "0px",
          opacity: isActive ? 1 : 0,
          visibility: isActive ? "visible" : "hidden",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
      {!isLast && <hr className="my-8 border-border" />}
    </div>
  );
};

export default MainAccordion;
