import React from "react";
import Picture from "@/components/Picture/Picture";
import constructClassName from "@/utilities/constructClassName";
import css from "./Card.module.scss";

export default function Card({
  children,
  className,
  href,
  icon,
  image,
  title,
}) {
  const thisClassName = constructClassName(css, "card", `custom ${className}`);

  return (
    <a
      className={thisClassName}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read more about ${title}`}
    >
      <Picture
        base={image.replace(/\.\w+$/, "")}
        min={250}
        max={2000}
        step={250}
      />
      <div className={css.inner}>
        <div className={css.overt}>
          <div className={css.icon}>{icon}</div>
          <div className={css.separator}></div>
          <div className={css.title}>{title}</div>
          <div className={css.description}>{children}</div>
        </div>
      </div>
    </a>
  );
}
