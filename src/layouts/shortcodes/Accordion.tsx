import { AccordionItem } from "@/components/functional-component/MainAccordion";
import React, { useState } from "react";

const Accordion = ({ faqs }: { faqs: { title?: string, faqs: { question: string, answer: string }[] }; }) => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <div className="bg-light rounded-lg">
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
  );
};

export default Accordion;
