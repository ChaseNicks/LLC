import React from "react";
import chase from "../assets/chase.jpg";
import leland from "../assets/leland.jpg";

const About = () => {
  return (
    <div>
      <div
        className="container is-fluid"
        style={{
          minHeight: "29.5rem",
          marginBottom: "2.5rem",
          marginTop: "4.5rem",
        }}
      >
        <div className="columns">
          <div className="column is-half is-flex is-flex-direction-column">
            <h2
              className="has-text-centered is-size-1"
              style={{
                marginTop: "2rem",
                marginBottom: ".7rem",
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
                  marginBottom: "1.1rem",
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
                marginBottom: ".7rem",
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
                  marginBottom: "1.1rem",
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
      </div>

      <div
        className="container is-fluid"
        style={{
          background: "linear-gradient(to right, #29C5F6 , #1260CC)",
          minHeight: "36.5rem",
          maxHeight: "120rem",
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
            color: "white"
          }}
        >
          OUR VALUES{" "}
        </h2>
        <div className="is-flex is-justify-content-center" style={{}}>
          <div
            className="justify-content-center"
            style={{
              background: "#424747",
              height: ".18rem",
              width: "5%",
              marginBottom: "2rem",
            }}
          ></div>
        </div>
        <div style={{ marginLeft: "1rem", marginRight: "1.1rem" }}>
          <div className="is-flex is-flex-wrap-wrap" style={{ height: "fit-content", rowGap: '1.2rem', paddingBottom: "2rem"}}>
            <div
              className=" box is-half is-flex box-trust"
            >
              <div className="">
                <h2
                  className="has-text-centered is-size-2 is-size-3-mobile"
                  style={{ paddingBottom: ".7rem", fontWeight: "boldest" }}
                >
                  Trust
                </h2>
                <p
                  className="has-text-left is-size-5"
                  style={{
                    paddingBottom: ".7rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  We focus on regular communication and transparency from the
                  first day of cooperation. You will get full access to Jira and
                  Repo, regular reports, and invitations to all the meetings.
                </p>
              </div>
            </div>
            <div className=" box is-half is-flex box-quality" style={{ }}>
              <div className="">
                <h2
                  className="has-text-centered is-size-2 is-size-3-mobile"
                  style={{ paddingBottom: ".7rem",fontWeight: "boldest" }}
                >
                  Quality
                </h2>
                <p
                  className="has-text-left is-size-5"
                  style={{
                    paddingBottom: ".7rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  We focus on regular communication and transparency from the
                  first day of cooperation. You will get full access to Jira and
                  Repo, regular reports, and invitations to all the meetings.
                </p>
              </div>
            </div>
            <div
              className=" box is-half is-flex box-trust "
            >
              <div className="">
                <h2
                  className="has-text-centered is-size-2 is-size-3-mobile"
                  style={{ paddingBottom: ".7rem", fontWeight: "boldest" }}
                >
                  Transparency
                </h2>
                <p
                  className="has-text-left is-size-5"
                  style={{
                    paddingBottom: ".7rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  We focus on regular communication and transparency from the
                  first day of cooperation. You will get full access to Jira and
                  Repo, regular reports, and invitations to all the meetings.
                </p>
              </div>
            </div>
            <div className=" box is-half is-flex box-quality" style={{}}>
              <div className="">
                <h2
                  className="has-text-centered is-size-2 is-size-3-mobile"
                  style={{ paddingBottom: ".7rem", fontWeight: "boldest" }}
                >
                  Quality
                </h2>
                <p
                  className="has-text-left is-size-5"
                  style={{
                    paddingBottom: ".7rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  We focus on regular communication and transparency from the
                  first day of cooperation. You will get full access to Jira and
                  Repo, regular reports, and invitations to all the meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "white",
          height: "fit-content",
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="art-container columns is-desktop is-justify-content-center" style={{ marginRight: "1.5rem", marginLeft: "1.5rem", columnGap: "10rem"}}>
            <div class="column is-two-fifths" >
              <div className="founder">
                <img className="pic" src={chase} alt="asdasd" />
              </div>
              <h2 id="aboutme-justin">Co-Founder | Chase Nicks</h2>
              <p id="aboutme-para">Writing an ‘About Me’ page or section for yourself is never easy. However,
                the good
                news is if you
                follow the formula and tips below, you should be able to generate an engaging ‘About Me’
                statement
                without too much of a
                struggle. Here’s how to write an ‘About Me’ page you can be proud of.</p>
            </div>

            <div className="column is-two-fifths">
              <div className="founder">
                <img className="pic" src={leland} alt="asdasd" />
              </div>
              <h2 id="aboutme-2">Co-Founder | Leland Hayes</h2>
              <p id="aboutme-para">Writing an ‘About Me’ page or section for yourself is never easy. However,
                the good
                news is if you
                follow the formula and tips below, you should be able to generate an engaging ‘About Me’
                statement
                without too much of a
                struggle. Here’s how to write an ‘About Me’ page you can be proud of.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
