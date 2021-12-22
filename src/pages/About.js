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
                width: "9%",
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
                width: "9%",
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
      </div>

      <div
        style={{
          background: "#FCFCFC",
          height: "30rem",
          marginBottom: "2.5rem",
          marginTop: "2.5rem",
        }}
      >
        <h2
          className="has-text-centered is-size-1"
          style={{
            paddingTop: "1.4rem",
            marginBottom: "1rem",
            fontWeight: "boldest",
          }}
        >
          OUR VALUES{" "}
        </h2>
        <div className="is-flex is-justify-content-center" style={{}}>
          <div
            className="justify-content-center"
            style={{
              background: "linear-gradient(to right, #972EFF , #E197FD)",
              height: ".18rem",
              width: "5%",
              marginBottom: "2rem",
            }}
          ></div>
        </div>
        <div className="columns">
          <div className="column box is-half is-flex is-flex-direction-column" style={{ marginRight: "1rem" }}>
            <div className="">
              <h2 className="has-text-centered is-size-2" style={{ paddingBottom: ".7rem" }}>Trust</h2>
              <p className="has-text-centered is-size-5" style={{ paddingBottom: ".7rem" }}>
                We focus on regular communication and transparency from the
                first day of cooperation. You will get full access to Jira and
                Repo, regular reports, and invitations to all the meetings.
              </p>
            </div>
          </div>
          <div className="column box is-half is-flex is-flex-direction-column" style={{ paddingLeft: "2rem" }}>
            <div className="">
              <h2 className="has-text-centered is-size-2" style={{ paddingBottom: ".7rem" }}>Quality</h2>
              <p className="has-text-centered is-size-5" style={{ paddingBottom: ".7rem" }}>
                We focus on regular communication and transparency from the
                first day of cooperation. You will get full access to Jira and
                Repo, regular reports, and invitations to all the meetings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "white",
          height: "30rem",
          marginBottom: "2.5rem",
          marginTop: "2.5rem",
        }}
      >
        <h2
          className="has-text-centered is-size-1"
          style={{
            paddingTop: "1.4rem",
            marginBottom: "1rem",
            fontWeight: "boldest",
          }}
        >
          FOUNDERS{" "}
        </h2>
        <div className="is-flex is-justify-content-center" style={{}}>
          <div
            className="justify-content-center"
            style={{
              background: "linear-gradient(to right, #972EFF , #E197FD)",
              height: ".18rem",
              width: "5%",
              marginBottom: "1rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
