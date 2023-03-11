import React from "react";
import "./Techstacks.css";
import { FaReact, FaPhp, FaLaravel, FaSass, FaGit } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
 
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaPhp />
            <h5>php</h5>
          </div>
          <div>
            <FaLaravel />
            <h5>laravel</h5>
          </div>

          <div>
            <FaGit />
            <h5>Git</h5>
          </div>

          <div>
            <FaSass/>
            <h5>Sass</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
        
          <div>
            <SiMaterialui />
            <h5>Materialui</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiRedux/>
            <h5>Redux</h5>
          </div>
        </div>
      </div>
    </>
  );
};
