import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ background: "black" }}>
      <div>
        <div className="footer-brand grow">
          <Link
            to="/"
            className="is-size-3 logo"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="tab-icon.png"
              alt="Digifie"
              style={{ height: "3.5rem", width: "3.5rem" }}
            />
            <p
              className="is-size-3"
              style={{
                color: "white",
                paddingLeft: ".2rem",
                paddingTop: ".2rem",
              }}
            >
              igifie
            </p>
          </Link>
        </div>
        <div className="is-flex is-justify-content-center">
          <div
            className="justify-content-center"
            style={{
              background: "linear-gradient(to right, #972EFF , #E197FD)",
              height: ".05rem",
              width: "50%",
              marginTop: "1rem",
            }}
          ></div>
        </div>
        <p className="has-text-centered is-size-4" style={{ color: "white", paddingTop: "1.5rem" }}>
          © 2021 | digifie.com | Founded by Chase Nicks & Leland Hayes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
