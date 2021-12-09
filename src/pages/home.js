import React from "react";
import Logo from "../assets/full-logo.png";
import Site from "../assets/site.png";
import DB from "../assets/database.png";
import SEO from "../assets/seo.png";

const Home = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "-2rem", width: "100%" }}>
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
      <h2
        className="has-text-centered is-size-2"
        style={{ marginBottom: "5rem" }}
      >
        Our expertise in the digital space delivers solutions.{" "}
      </h2>
      <div className="columns">
        <div className="column is-one-third is-flex is-flex-direction-column is-align-items-center">
          <img
            src={Site}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Custome Site</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem" }}>
            Best in class site built out with React and modern architecture to
            make your users experience better than ever
          </p>
        </div>
        <div className="column is-one-third is-flex is-flex-direction-column is-align-items-center">
          <img
            src={DB}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>Database</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem" }}>
            Need away to store data that helps your business function day to day
            or maybe even needing an existing database to perform faster? We got
            you covered
          </p>
        </div>
        <div className="column is-one-third is-flex is-flex-direction-column is-align-items-center">
          <img
            src={SEO}
            alt="custom websites"
            style={{ height: "5rem", width: "5rem", paddingBottom: ".4rem" }}
          />
          <h2 className="is-size-3" style={{ paddingBottom: ".7rem" }}>SEO</h2>
          <p className={"has-text-centered"} style={{ paddingBottom: "1.5rem" }}>
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
