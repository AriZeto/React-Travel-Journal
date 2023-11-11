import React from "react";
import LinkedInSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="Footer">
      <a href="https://linkedin.com/in/ariel-zeto" className="Footer--svg">
        <img src={LinkedInSVG} alt="" />
      </a>
      <a href="https://github.com/arizeto" className="Footer--svg">
        <img src={GithubSVG} alt="" />
      </a>
    </footer>
  );
}
