import Link from "next/link";
import React from "react";
import css from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header
      className={`section ${css.navbar}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="sectionInner">
        <nav className={css.entries}>
          <Link href="/" className="custom" aria-label="Go to Home Page">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
