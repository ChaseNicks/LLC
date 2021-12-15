import React from "react";
// import Logo from "../assets/full-logo.png";
import Sample from "../assets/sample.jpeg";
import Site from "../assets/site.png";
import DB from "../assets/database.png";
import SEO from "../assets/seo.png";
import Analytics from "../assets/analytics.png";
import LogoDesign from "../assets/LogoDesign.png";
import WebRevamp from "../assets/revamp.png";
import ex1 from "../assets/ex1.png";

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
            <h1
              className="is-size-2"
              style={{ paddingBottom: "2rem", fontWeight: "boldest" }}
            >
              Software Development Company
            </h1>
            <p
              className="is-size-4 test"
              style={{ paddingBottom: "1.3rem", fontWeight: "bold" }}
            >
              Empowering individuals and business owners to utilize this digital
              age to benefit them most.
            </p>
            <button
              type="submit"
              className="button "
              style={{ borderColor: "#972EFF ", fontWeight: "bold" }}
            >
              Get A Free Quote
            </button>
          </div>

          <div className="column" style={{ marginBottom: ".3rem" }}>
            <img
              src={Sample}
              alt="Digifie"
              style={{ height: "20rem", width: "29rem" }}
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1
          className="has-text-centered is-size-1"
          style={{
            paddingTop: "2rem",
            marginBottom: "1rem",
            fontWeight: "boldest",
          }}
        >
          SERVICES{" "}
        </h1>
        <div className="is-flex is-justify-content-center" style={{}}>
          <div
            className="justify-content-center"
            style={{
              background: "linear-gradient(to right, #972EFF , #E197FD)",
              height: ".18rem",
              width: "5%",
              marginBottom: "1.3rem",
            }}
          ></div>
        </div>
        <p
          className="has-text-centered is-size-4"
          style={{ marginBottom: "5rem", fontWeight: "bold", }}
        >
          Our expertise in the digital space delivers solutions.{" "}
        </p>
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
              In today's world data drives almost all business decisions, but
              just raw data itself isnt enough. This is when dashboards with
              rich simplistic charts come into play.
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

      {/* Work Timeline */}
    <div className="container" style={{ marginTop: "8rem"}}>

    <div className="has-text-centered">
          <h1
            className="is-size-1 is-size-2-mobile"
            style={{ fontWeight: "boldest", marginBottom: "1rem" }}
          >
            Our Process
          </h1>
          <div className="is-flex is-justify-content-center" style={{}}>
            <div
              className="justify-content-center"
              style={{
                background: "linear-gradient(to right, #972EFF , #E197FD)",
                height: ".18rem",
                width: "5%",
                marginBottom: "1.3rem",
              }}
            ></div>
          </div>
          <div className="is-flex is-justify-content-center">
            <p
              className="is-size-5 is-size-5-mobile has-text-centered"
              style={{
                paddingBottom: "3rem",
                maxWidth: "48rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              We have been lucky enough to work on some great software
              development applications. Here is a glemce of some of those
              projects, if you would like to see more of our work just send us
              an email and we will be more than happy to share more samples.
            </p>
          </div>
        </div>

      <div className="timeline">
        <div className="conta left">
<div className="date">Start</div>
          <i className="icon fa fa-home"></i>
          <div className="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className="conta right">

          <i className="icon fa fa-gift"></i>
          <div className="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className="conta left">

          <i className="icon fa fa-user"></i>
          <div className="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className="conta right">

          <i className="icon fa fa-fire"></i>
          <div className="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className="conta left">

          <i className="icon fa fa-cog"></i>
          <div className="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className="conta right">
        <div className="date">Finish</div>
          <i className="icon fa fa-certificate"></i>
          <div className="content">
            <h2>className ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Our Work */}
      <section style={{ paddingTop: "3rem" }}>
        <div className="has-text-centered">
          <h1
            className="is-size-1 is-size-2-mobile"
            style={{ fontWeight: "boldest", marginBottom: "1rem" }}
          >
            Our Work
          </h1>
          <div className="is-flex is-justify-content-center" style={{}}>
            <div
              className="justify-content-center"
              style={{
                background: "linear-gradient(to right, #972EFF , #E197FD)",
                height: ".18rem",
                width: "5%",
                marginBottom: "1.3rem",
              }}
            ></div>
          </div>
          <div className="is-flex is-justify-content-center">
            <p
              className="is-size-5 is-size-5-mobile has-text-centered"
              style={{
                paddingBottom: "3rem",
                maxWidth: "48rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              We have been lucky enough to work on some great software
              development applications. Here is a glemce of some of those
              projects, if you would like to see more of our work just send us
              an email and we will be more than happy to share more samples.
            </p>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-one-third is-half-mobile">
            <img src={ex1} alt="" style={{ width: "fit-content" }} />
          </div>
          <div className="column is-one-third is-half-mobile">
            <img src={ex1} alt="" />
          </div>
          <div className="column is-one-third is-half-mobile">
            <img src={ex1} alt="" />
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-one-third is-half-mobile">
            <img src={ex1} alt="" />
          </div>
          <div className="column is-one-third is-half-mobile">
            <img src={ex1} alt="" />
          </div>
          <div className="column is-one-third is-half-mobile">
            <img src={ex1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
