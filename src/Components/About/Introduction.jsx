import React from "react";
import "./Introduction.css"
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src="https://tusharsahu-portfolio.netlify.app/assets/img/profile.gif" alt="" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
              
              Hi Everyone, My name is{" "}
                <span className="different">Ahmed Hamdi</span> and I am from{" "}
                <span className="different">
                  {" "}
                Egypt  </span><br/>
                I am a Frontend Developer. I build beautifull websites with React and Tailwind CSS.
I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more
<br/>
                <span className="different">
                & In backend
                </span>
       I know php and laravel.         
              </h4>
               
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
