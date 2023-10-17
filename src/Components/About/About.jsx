import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <section className="About d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-white fw-bolder">ABOUT COMPONENT</h1>

        <div className="d-flex justify-content-center align-items-center ">
          <i className="starLine"> </i>
          <i className="fa-solid fa-star mx-3 text-white"></i>
          <i className="starLine"> </i>
        </div>

        <div className="container">
          <div className="row  p-4">
            <div className="col-md-6 text-white   ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 text-white  ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
