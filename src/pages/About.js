import React from "react";
import chase from "../assets/chase.jpg";
import leland from "../assets/leland.jpg";
import vid from "../assets/test.mp4";

const About = () => {
  return (
    <div>


      <div className="videoDiv2" style={{ backgroundColor: "black"}}>
        <video className="video2" autoPlay palysInline loop muted style={{ opacity: ".4"}}>
          <source src={vid} />
        </video>

        <div id="videoMessage2" className="styling">
          <h1 className="is-size-5">ABOUT US</h1>
          <h2 className="is-size-2 has-text-weight-bold" style={{ width: "41rem"}}>We think you should feel supported by the people you work with</h2>
          <p className="is-size-3">The quality of our software development comes from how we treat each other. Our talent remains approachable and ready to lend a hand because it’s the right thing to do.</p>
        </div>
      </div>




      <div
        className="container is-fluid"
        style={{
          minHeight: "36.5rem",
          maxHeight: "120rem",
          marginBottom: "2.5rem"
        }}
      >
        <h2
          className="has-text-centered is-size-1"
          style={{
            paddingTop: "1.4rem",
            marginBottom: "1rem",
            fontWeight: "boldest",
            color: "white",
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
        <div style={{ marginLeft: "1rem", marginRight: "1.1rem" }}>
          <div
            className="is-flex is-flex-wrap-wrap"
            style={{
              height: "fit-content",
              rowGap: "1.2rem",
              paddingBottom: "2rem",
            }}
          >
            <div className=" box is-half is-flex box-trust">
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
            <div className=" box is-half is-flex box-trust ">
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
              marginBottom: "2rem",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="art-container columns is-desktop is-justify-content-center"
            style={{
              marginRight: "1.5rem",
              marginLeft: "1.5rem",
              columnGap: "3rem",
            }}
          >
            <div class="column is-three-fifths">
              <div className="founder">
                <img
                  className="pic"
                  style={{ padding: "1rem", border: "#E197FD solid 1px" }}
                  src={chase}
                  alt="asdasd"
                />
              </div>
              <h2 id="aboutme" style={{ paddingBottom: "1.3rem" }}>
                Chase Nicks | CO-FOUNDER
              </h2>
            </div>
            <div className="column is-three-fifths">
              <div className="founder">
                <img
                  className="pic"
                  style={{ padding: "1rem", border: "#E197FD solid 1px" }}
                  src={leland}
                  alt="asdasd"
                />
              </div>
              <h2 id="aboutme-2">Leland Hayes | CO-FOUNDER</h2>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            marginTop: "1rem",
            marginRight: "2rem",
            marginLeft: "2rem",
          }}
        >
          <p id="aboutme-para">
            From the very beginning we knew that we wanted to share out love for tech with others in a impactful way leading us to create <span style={{ color: " #972EFF ", fontWeight: "600" }}>Digifie</span>. Our goal is to provide others with top class digital capabilities to better server their audience rather that be for businesses, creators, or individuals wanting to better showcase themselves online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
