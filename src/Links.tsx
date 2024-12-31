import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";

import "./links.css"

export function Links()
{
  
  return <>
    <div>
      <a href="https://github.com/adsuth">
        <FaGithubAlt />
      </a>
      <a href="https://www.linkedin.com/in/adsuth/">
        <FaLinkedinIn />
      </a>
      <a href="/Adam Sutherland's Resume.pdf" download>
        <FaRegFileLines />
      </a>
    </div>
  </> 
}