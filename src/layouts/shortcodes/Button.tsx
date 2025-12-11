import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Button = ({
  label,
  link,
  style,
  rel,
  className,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  className?: any;
}) => {
  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={`noopener noreferrer ${rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
      className={`inline btn no-underline ${className} ${style === "outline"
        ? "btn-outline-primary flex items-center group"
        : "btn-primary text-text-light"
        }`}
    >
      {label}
      {style === "outline" && (
        <FaAngleRight className="inline ml-2 transition-transform duration-300 group-hover:translate-x-2" />
      )}
    </a>
  );
};

export default Button;
