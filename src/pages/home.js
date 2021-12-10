import React from "react";
import Logo from "../assets/full-logo.png";
import Site from "../assets/site.png";
import DB from "../assets/database.png";
import SEO from "../assets/seo.png";
import Analytics from "../assets/analytics.png";
import LogoDesign from "../assets/LogoDesign.png";
import WebRevamp from "../assets/revamp.png";

const Home = () => {
  return (
    <div>

      <div className="container"style={{ marginTop: "-2rem", width: "100%" }}>
        <div
          className="is-size-5 is-size-5-mobile has-text-centered"
          style={{
            marginTop: "2.5rem",
            marginBottom: "2rem",
            marginRight: ".5rem",
            marginLeft: ".5rem",
          }}
        >
          <img
            src={Logo}
            alt="Digifie"
            style={{ height: "19rem", width: "30rem" }}
          />
        </div>
      </div>
      <div style={{  background: "linear-gradient(to right, #972EFF , #E197FD)", height: ".5rem", marginBottom: "4rem", marginTop: "4rem" }}></div>
      <h2
        className="has-text-centered is-size-2"
        style={{ marginBottom: "5rem" }}
      >

        Our expertise in the digital space delivers solutions.{" "}
      </h2>
      <div className="columns" style={{ marginLeft: "1rem", marginRight: "1rem", marginBottom: "3rem" }}>
        {/* Custome Site */}
        <div className="column is-one-forth is-flex is-flex-direction-column is-align-items-center" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <img
            src={Site}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Custome Site</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem", marginLeft: "3rem", marginRight: "3rem" }}>
            Best in class site built out with React and modern architecture to
            make your users experience better than ever
          </p>
        </div>
        {/* Database */}
        <div className="column is-one-forth is-flex is-flex-direction-column is-align-items-center" style={{  marginLeft: "1rem", marginRight: "1rem" }}>
          <img
            src={DB}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Database</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem", marginLeft: "3rem", marginRight: "3rem" }}>
            Need a way to store data that helps your business function day to day
            or maybe even needing an existing database to perform faster? We got
            you covered
          </p>
        </div>
        {/* SEO */}
        <div className="column is-one-forth is-flex is-flex-direction-column is-align-items-center" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <img
            src={SEO}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>SEO</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem", marginLeft: "3rem", marginRight: "3rem" }}>
            Want more traffic driven to your website? Customers having a hard
            time finding you on the internet? Let us enhance your organic
            ranking and better your Google index with our best in class SEO
            strategy
          </p>
        </div>
      </div>

      <div className="columns" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        {/* Analytic Dashboards */}
        <div className="column is-one-forth is-flex is-flex-direction-column is-align-items-center" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <img
            src={Analytics}
            alt="Analytic Dashboards"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Analytic Dashboards</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem", marginLeft: "3rem", marginRight: "3rem" }}>
            Best in class site built out with React and modern architecture to
            make your users experience better than ever
          </p>
        </div>
        {/* Logo Design */}
        <div className="column is-one-forth is-flex is-flex-direction-column is-align-items-center" style={{  marginLeft: "1rem", marginRight: "1rem" }}>
          <img
            src={LogoDesign}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Logo Design</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem", marginLeft: "3rem", marginRight: "3rem" }}>
            Need away to store data that helps your business function day to day
            or maybe even needing an existing database to perform faster? We got
            you covered
          </p>
        </div>
        {/* Site Revamp*/}
        <div className="column is-one-forth is-flex is-flex-direction-column is-align-items-center" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <img
            src={WebRevamp}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Site Revamp</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem", marginLeft: "3rem", marginRight: "3rem" }}>
            Want more traffic driven to your website? Customers having a hard
            time finding you on the internet? Let us enhance your organic
            ranking and better your Google index with our best in class SEO
            strategy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
