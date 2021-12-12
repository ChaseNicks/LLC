import React from "react";
// import Logo from "../assets/full-logo.png";
import Sample from "../assets/sample.jpeg";
import Site from "../assets/site.png";
import DB from "../assets/database.png";
import SEO from "../assets/seo.png";
import Analytics from "../assets/analytics.png";
import LogoDesign from "../assets/LogoDesign.png";
import WebRevamp from "../assets/revamp.png";

const Home = () => {
  return (
    <div>
      <div
        className="container cont-img is-one-third"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "fit-content",
        }}
      >
        <div className="columns">
          <div
            className="column"
            style={{ marginTop: "2rem", marginLeft: "1.5rem" }}
          >
            <h1 className="is-size-2" style={{ paddingBottom: "2rem", fontWeight: "boldest"  }}>
              Digital services
            </h1>
            <p className="is-size-4" style={{ paddingBottom: "1.3rem", fontWeight: "bold" }}>
              Empowering individuals and business owners to utilize this digital
              age to benefit them most.
            </p>
            <button
              type="submit"
              className="button "
              style={{ borderColor: "#972EFF ", fontWeight: "bold"  }}
            >
              Get A Free Quote
            </button>
          </div>

          <div className="column" style={{ marginBottom: "-.43rem" }}>
            <img
              src={Sample}
              alt="Digifie"
              style={{ height: "20rem", width: "29rem" }}
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "black", color: "white" }}>
        <h2
          className="has-text-centered is-size-2"
          style={{ marginBottom: "5rem", paddingTop: "3rem" }}
        >
          Our expertise in the digital space delivers solutions.{" "}
        </h2>
        <div
          className="columns"
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
            marginBottom: "3rem",
          }}
        >
          {/* Custome Site */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column is-align-items-center"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <img
              src={Site}
              alt="custom websites"
              style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
            />
            <h2
              className="is-size-3 has-text-centered"
              style={{ paddingBottom: ".7rem" }}
            >
              Custome Site
            </h2>
            <p
              className={"has-text-centered"}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Best in class site built with React and other modern architecture
              to make your users experience better than ever
            </p>
          </div>
          {/* Database */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column is-align-items-center"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <img
              src={DB}
              alt="custom websites"
              style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
            />
            <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>
              Database
            </h2>
            <p
              className={"has-text-centered"}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Need a way to store data that helps your business function day to
              day or maybe even needing an existing database to perform faster?
              We got you covered
            </p>
          </div>
          {/* SEO */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column is-align-items-center"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <img
              src={SEO}
              alt="custom websites"
              style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
            />
            <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>
              SEO
            </h2>
            <p
              className={"has-text-centered"}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Want more traffic driven to your website? Customers having a hard
              time finding you on the internet? Let us enhance your organic
              ranking and better your Google index with our best in class SEO
              strategy
            </p>
          </div>
        </div>

        <div
          className="columns"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          {/* Analytic Dashboards */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column is-align-items-center"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <img
              src={Analytics}
              alt="Analytic Dashboards"
              style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
            />
            <h2
              className="is-size-3 has-text-centered"
              style={{ paddingBottom: ".7rem" }}
            >
              Analytic Dashboards
            </h2>
            <p
              className={"has-text-centered"}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              In today's world data drives almost all business decisions, but just raw data itself isnt enough. This is when dashboards with rich simplistic charts come into play.
            </p>
          </div>
          {/* Logo Design */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column is-align-items-center"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <img
              src={LogoDesign}
              alt="custom websites"
              style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
            />
            <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>
              Logo Design
            </h2>
            <p
              className={"has-text-centered"}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              In dire need for a logo upgrade, or just starting out and need a
              logo that fits your business needs?
            </p>
          </div>
          {/* Site Revamp*/}
          <div
            className="column is-one-forth is-flex is-flex-direction-column is-align-items-center"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <img
              src={WebRevamp}
              alt="custom websites"
              style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
            />
            <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>
              Site Revamp
            </h2>
            <p
              className={"has-text-centered"}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Got an existing site that is slowly fadding behind modern style
              and look? Maybe even as simple as new feature added? We got you
              covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
