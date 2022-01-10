import React from "react";
import maintain from "../assets/webmaintenance.png";
import test from "../assets/test.png";
import proto from "../assets/blueprint.png";
import brain from "../assets/brain.png";
import define from "../assets/define.png";
import comm from "../assets/comm.png";

const Services = () => {
  return (
    <div>
      <div className="is-flex is-justify-content-center">
        <div className="is-align-items-center has-text-centered">
          <h1
            className="is-size-2 is-size-3-mobile"
            style={{
              padding: ".5rem",
              marginTop: "5rem",
              maxWidth: "48rem",
              fontWeight: "900",
            }}
          >
            {" "}
            {/* Needs to be changed */}
            Custom software development services from professionals you’ll enjoy
            working with
          </h1>
          <p
            className="is-size-6 is-size-6-mobile"
            style={{
              padding: ".5rem",
              marginTop: ".7rem",
              maxWidth: "48rem",
              fontWeight: "900",
              lineHeight: "2",
            }}
          >
            {" "}
            {/* Needs to be changed */}
            Team up with superstar product designers, frontend/backend
            developers, cloud architects, and DevOps. 170+ professionals. 140+
            delivered projects. Full-cycle custom software development services
            powered by 9 years of best practices.
          </p>
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "83rem",
          marginBottom: "5.7rem",
          marginTop: "10rem",
        }}
      >
        <div
          className="columns"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <div className="column is-flex is-half">
            <div className="has-text-left">
              <h1
                className="is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{
                  textAlign: "left",

                  paddingBottom: ".9rem",
                }}
              >
                Custom <br /> Web <span style={{ color: "#ff934f" }}> / </span>{" "}
                Mobile Site
              </h1>
              <p
                className="is-size-5 is-size-6-mobile has-text-weight-semibold"
                style={{
                  lineHeight: "2",
                  letterSpacing: ".8px",
                  paddingRight: "2rem",
                }}
              >
                {" "}
                {/* Needs to be changed */}
                Team up with superstar product designers, frontend/backend
                developers, cloud architects, and DevOps. 170+ professionals.
                140+ delivered projects. Full-cycle custom software development
                services powered by 9 years of best practices.
              </p>
            </div>
          </div>

          <div
            className="column is-half"
            style={{ marginLeft: "1rem", marginTop: "4rem" }}
          >
            {/* 1st row of columns  */}
            <div className="columns">
              <div
                className="column srv-tiles is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff934f",
                }}
              >
                <img src={comm} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Empathize
                </p>
              </div>
              <div
                className="column srv-tiles is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff934f",
                }}
              >
                <img src={define} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Define
                </p>
              </div>
              <div
                className="column srv-tiles is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff934f",
                }}
              >
                <img src={brain} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Ideate
                </p>
              </div>
            </div>

            {/* 2ndrow of columns*/}
            <div className="columns"  style={{ marginTop: "1.5rem" }}>
              <div
                className="column srv-tiles is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff934f",
                }}
              >
                <img src={maintain} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Maintain
                </p>
              </div>
              <div
                className="column srv-tiles is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff934f",
                }}
              >
                <img src={test} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Test
                </p>
              </div>
              <div
                className="column srv-tiles is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff934f",
                }}
              >
                <img src={proto} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Prototype
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "83rem",
          marginBottom: "5.7rem",
          marginTop: "10rem",
        }}
      >
        <div
          className="columns"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >

          <div
            className="column is-half"
            style={{ marginLeft: "1rem", marginTop: "4rem" }}
          >
            {/* 1st row of columns  */}
            <div className="columns">
              <div
                className="column srv-tiles2 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3C5CCF",
                }}
              >
                <img src={comm} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Empathize
                </p>
              </div>
              <div
                className="column srv-tiles2 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3C5CCF",
                }}
              >
                <img src={define} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Define
                </p>
              </div>
              <div
                className="column srv-tiles2 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3C5CCF",
                }}
              >
                <img src={brain} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Ideate
                </p>
              </div>
            </div>

            {/* 2ndrow of columns*/}
            <div className="columns"  style={{ marginTop: "1.5rem" }}>
              <div
                className="column srv-tiles2 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3C5CCF",
                }}
              >
                <img src={maintain} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Maintain
                </p>
              </div>
              <div
                className="column srv-tiles2 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3C5CCF",
                }}
              >
                <img src={test} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Test
                </p>
              </div>
              <div
                className="column srv-tiles2 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3C5CCF",
                }}
              >
                <img src={proto} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Prototype
                </p>
              </div>
            </div>
          </div>
          <div className="column is-flex is-half">
            <div className="has-text-left">
              <h1
                className="is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{
                  textAlign: "left",

                  paddingBottom: ".9rem",
                }}
              >
                Existing <br /> Site {" "}
                Revam<span style={{ color: "#3C5CCF" }}>p</span>
              </h1>
              <p
                className="is-size-5 is-size-6-mobile has-text-weight-semibold"
                style={{
                  lineHeight: "2",
                  letterSpacing: ".8px",
                  paddingRight: "2rem",
                }}
              >
                {" "}
                {/* Needs to be changed */}
                Team up with superstar product designers, frontend/backend
                developers, cloud architects, and DevOps. 170+ professionals.
                140+ delivered projects. Full-cycle custom software development
                services powered by 9 years of best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "83rem",
          marginBottom: "5.7rem",
          marginTop: "10rem",
        }}
      >
        <div
          className="columns"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <div className="column is-flex is-half">
            <div className="has-text-left">
              <h1
                className="is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{
                  textAlign: "left",

                  paddingBottom: ".9rem",
                }}
              >
                Analytic <br /> {" "}
                Dashboard<span style={{ color: "#3CCF91" }}>s</span>
              </h1>
              <p
                className="is-size-5 is-size-6-mobile has-text-weight-semibold"
                style={{
                  lineHeight: "2",
                  letterSpacing: ".8px",
                  paddingRight: "2rem",
                }}
              >
                {" "}
                {/* Needs to be changed */}
                Team up with superstar product designers, frontend/backend
                developers, cloud architects, and DevOps. 170+ professionals.
                140+ delivered projects. Full-cycle custom software development
                services powered by 9 years of best practices.
              </p>
            </div>
          </div>

          <div
            className="column is-half"
            style={{ marginLeft: "1rem", marginTop: "4rem" }}
          >
            {/* 1st row of columns  */}
            <div className="columns">
              <div
                className="column srv-tiles3 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3CCF91",
                }}
              >
                <img src={comm} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Empathize
                </p>
              </div>
              <div
                className="column srv-tiles3 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3CCF91",
                }}
              >
                <img src={define} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Define
                </p>
              </div>
              <div
                className="column srv-tiles3 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3CCF91",
                }}
              >
                <img src={brain} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Ideate
                </p>
              </div>
            </div>

            {/* 2ndrow of columns*/}
            <div className="columns"  style={{ marginTop: "1.5rem" }}>
              <div
                className="column srv-tiles3 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3CCF91",
                }}
              >
                <img src={maintain} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Maintain
                </p>
              </div>
              <div
                className="column srv-tiles3 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3CCF91",
                }}
              >
                <img src={test} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Test
                </p>
              </div>
              <div
                className="column srv-tiles3 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #3CCF91",
                }}
              >
                <img src={proto} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Prototype
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "83rem",
          marginBottom: "5.7rem",
          marginTop: "10rem",
        }}
      >
        <div
          className="columns"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >

          <div
            className="column is-half"
            style={{ marginLeft: "1rem", marginTop: "2.6rem" }}
          >
            {/* 1st row of columns  */}
            <div className="columns">
              <div
                className="column srv-tiles4 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff0000",
                }}
              >
                <img src={comm} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Empathize
                </p>
              </div>
              <div
                className="column srv-tiles4 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff0000",
                }}
              >
                <img src={define} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Define
                </p>
              </div>
              <div
                className="column srv-tiles4 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff0000",
                }}
              >
                <img src={brain} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Ideate
                </p>
              </div>
            </div>

            {/* 2ndrow of columns*/}
            <div className="columns"  style={{ marginTop: "1.5rem" }}>
              <div
                className="column srv-tiles4 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff0000",
                }}
              >
                <img src={maintain} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Maintain
                </p>
              </div>
              <div
                className="column srv-tiles4 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff0000",
                }}
              >
                <img src={test} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Test
                </p>
              </div>
              <div
                className="column srv-tiles4 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #ff0000",
                }}
              >
                <img src={proto} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Prototype
                </p>
              </div>
            </div>
          </div>
          <div className="column is-flex is-half">
            <div className="has-text-left">
              <h1
                className="is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{
                  textAlign: "left",

                  paddingBottom: ".9rem",
                }}
              >
                Databas<span style={{ color: "#ff0000" }}>e</span> {" "}
                
              </h1>
              <p
                className="is-size-5 is-size-6-mobile has-text-weight-semibold"
                style={{
                  lineHeight: "2",
                  letterSpacing: ".8px",
                  paddingRight: "2rem",
                }}
              >
                {" "}
                {/* Needs to be changed */}
                Team up with superstar product designers, frontend/backend
                developers, cloud architects, and DevOps. 170+ professionals.
                140+ delivered projects. Full-cycle custom software development
                services powered by 9 years of best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "83rem",
          marginBottom: "5.7rem",
          marginTop: "10rem",
        }}
      >
        <div
          className="columns"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <div className="column is-flex is-half">
            <div className="has-text-left">
              <h1
                className="is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{
                  textAlign: "left",

                  paddingBottom: ".9rem",
                }}
              >
                Search <br /> {" "}
                Engine Opt. <span style={{ color: "#FFFF00" }}> (SEO)</span>
              </h1>
              <p
                className="is-size-5 is-size-6-mobile has-text-weight-semibold"
                style={{
                  lineHeight: "2",
                  letterSpacing: ".8px",
                  paddingRight: "2rem",
                }}
              >
                {" "}
                {/* Needs to be changed */}
                Team up with superstar product designers, frontend/backend
                developers, cloud architects, and DevOps. 170+ professionals.
                140+ delivered projects. Full-cycle custom software development
                services powered by 9 years of best practices.
              </p>
            </div>
          </div>

          <div
            className="column is-half"
            style={{ marginLeft: "1rem", marginTop: "4rem" }}
          >
            {/* 1st row of columns  */}
            <div className="columns">
              <div
                className="column srv-tiles5 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #FFFF00",
                }}
              >
                <img src={comm} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Empathize
                </p>
              </div>
              <div
                className="column srv-tiles5 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #FFFF00",
                }}
              >
                <img src={define} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Define
                </p>
              </div>
              <div
                className="column srv-tiles5 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #FFFF00",
                }}
              >
                <img src={brain} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Ideate
                </p>
              </div>
            </div>

            {/* 2ndrow of columns*/}
            <div className="columns"  style={{ marginTop: "1.5rem" }}>
              <div
                className="column srv-tiles5 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #FFFF00",
                }}
              >
                <img src={maintain} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Maintain
                </p>
              </div>
              <div
                className="column srv-tiles5 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #FFFF00",
                }}
              >
                <img src={test} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Test
                </p>
              </div>
              <div
                className="column srv-tiles5 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #FFFF00",
                }}
              >
                <img src={proto} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Prototype
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "83rem",
          marginBottom: "5.7rem",
          marginTop: "10rem",
        }}
      >
        <div
          className="columns"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >

          <div
            className="column is-half"
            style={{ marginLeft: "1rem", marginTop: "4rem" }}
          >
            {/* 1st row of columns  */}
            <div className="columns">
              <div
                className="column srv-tiles6 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #972EFF",
                }}
              >
                <img src={comm} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Empathize
                </p>
              </div>
              <div
                className="column srv-tiles6 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #972EFF",
                }}
              >
                <img src={define} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Define
                </p>
              </div>
              <div
                className="column srv-tiles6 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #972EFF",
                }}
              >
                <img src={brain} alt="developer" style={{ height: "4rem", width: "4rem"}} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Ideate
                </p>
              </div>
            </div>

            {/* 2ndrow of columns*/}
            <div className="columns"  style={{ marginTop: "1.5rem" }}>
              <div
                className="column srv-tiles6 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #972EFF",
                }}
              >
                <img src={maintain} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Maintain
                </p>
              </div>
              <div
                className="column srv-tiles6 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #972EFF",
                }}
              >
                <img src={test} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Test
                </p>
              </div>
              <div
                className="column srv-tiles6 is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center grow"
                style={{
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
                  border: "1.2px solid #972EFF",
                }}
              >
                <img src={proto} alt="developer" style={{ height: "4rem", width: "4rem" }} />
                <p
                  className={"tile-p  is-size-5"}
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  Prototype
                </p>
              </div>
            </div>
          </div>
          <div className="column is-flex is-half">
            <div className="has-text-left">
              <h1
                className="is-size-1 is-size-3-mobile has-text-weight-bold"
                style={{
                  textAlign: "left",

                  paddingBottom: ".9rem",
                }}
              >
                Professional <br/>{" "}
                Logo Designer<span style={{ color: "#972EFF" }}>s</span>
                
              </h1>
              <p
                className="is-size-5 is-size-6-mobile has-text-weight-semibold"
                style={{
                  lineHeight: "2",
                  letterSpacing: ".8px",
                  paddingRight: "2rem",
                }}
              >
                {" "}
                {/* Needs to be changed */}
                Team up with superstar product designers, frontend/backend
                developers, cloud architects, and DevOps. 170+ professionals.
                140+ delivered projects. Full-cycle custom software development
                services powered by 9 years of best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
