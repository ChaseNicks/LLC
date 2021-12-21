import React from "react";

const About = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-half is-flex is-flex-direction-column">
          <h2
            className="has-text-centered is-size-1"
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              fontWeight: "boldest",
            }}
          >
            WHAT WE DO{" "}
          </h2>
          <div className="is-flex is-justify-content-center" style={{}}>
            <div
              className="justify-content-center"
              style={{
                background: "linear-gradient(to right, #972EFF , #E197FD)",
                height: ".18rem",
                width: "6.7%",
                marginBottom: "1rem",
              }}
            ></div>
          </div>
          <div className="is-flex is-justify-content-center">
            <p
              className="has-text-centered is-size-4"
              style={{
                maxWidth: "40rem",
                marginBottom: "3rem",
                fontWeight: "bold",
              }}
            >
              Let Digifie help you with all your digital needs. There are
              multiple ways to contact us, choose which one is best for you.
              Lets start building your dream website.{" "}
            </p>
          </div>
        </div>
        <div className="column is-half is-flex is-flex-direction-column">
          <h2
            className="has-text-centered is-size-1"
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              fontWeight: "boldest",
            }}
          >
            HOW WE WORK{" "}
          </h2>
          <div className="is-flex is-justify-content-center" style={{}}>
            <div
              className="justify-content-center"
              style={{
                background: "linear-gradient(to right, #972EFF , #E197FD)",
                height: ".18rem",
                width: "6.7%",
                marginBottom: "1rem",
              }}
            ></div>
          </div>
          <div className="is-flex is-justify-content-center">
            <p
              className="has-text-centered is-size-4"
              style={{
                maxWidth: "40rem",
                marginBottom: "5rem",
                fontWeight: "bold",
              }}
            >
              Let Digifie help you with all your digital needs. There are
              multiple ways to contact us, choose which one is best for you.
              Lets start building your dream website.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
