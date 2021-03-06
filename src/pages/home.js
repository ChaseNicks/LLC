import React from "react";
// import Logo from "../assets/full-logo.png";
// import Sample from "../assets/sample.jpeg";
import Site from "../assets/site.png";
import DB from "../assets/database.png";
import SEO from "../assets/seo.png";
import Analytics from "../assets/analytics.png";
import LogoDesign from "../assets/LogoDesign.png";
import WebRevamp from "../assets/revamp.png";
import ex1 from "../assets/ex1.png";
import cta from "../assets/cta.jpeg";
import check from "../assets/check.png";

const Home = () => {
  return (
    <div>
      {/* Page Start */}
      <div className="opc-hm">
        <div
          className="container cont-img is-one-third"
          style={{
            width: "93%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "36rem",
          }}
        >
          <div
            className="columns"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <div
              className="column"
              style={{ marginTop: "11rem", marginLeft: "1.2rem" }}
            >
              <h1
                className="is-size-2"
                style={{ paddingBottom: "2rem", fontWeight: "bolder" }}
              >
                Software Development Company
              </h1>
              <p
                className="is-size-4 test"
                style={{ paddingBottom: "1.3rem", fontWeight: "bold" }}
              >
                Empowering individuals and business owners to utilize this
                digital age to benefit them most.
              </p>
              <a href="/contact">
                <button
                  type="submit"
                  className="button grow"
                  style={{
                    borderColor: "#972EFF ",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Get A Free Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={{ backgroundColor: "black", color: "white", marginTop: "2.3rem" }}>
        <h1
          className="has-text-centered is-size-1"
          style={{
            paddingTop: "4.5rem",
            marginBottom: ".7rem",
            fontWeight: "boldest",
          }}
        >
          SERVICES{" "}
        </h1>
        <div className="is-flex is-justify-content-center" style={{}}>
          <div
            className="justify-content-center"
            style={{
              background: "linear-gradient(to right, #972EFF , #ff934f)",
              height: ".18rem",
              width: "5%",
              marginBottom: "1.3rem",
            }}
          ></div>
        </div>
        <p
          className="has-text-centered is-size-4"
          style={{ marginBottom: "3rem", fontWeight: "bold", padding: ".2rem" }}
        >
          Our expertise in the digital space delivers solutions.{" "}
        </p>
        <div
          className="columns"
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          {/* Custome Site */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column serv-cards grow"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={Site}
              alt="custom websites"
              style={{
                height: "5rem",
                width: "5rem",
                paddingBottom: ".4rem",
                marginTop: "1.7rem",
                marginLeft: "2.2rem"
              }}
            />
            <h2
              className="is-size-3"
              style={{ paddingBottom: ".7rem", marginLeft: "1rem" }}
            >
              Custome Site
            </h2>
            <p
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem"
              }}
            >
              Best in class site built with React and other modern architecture
              to make your users experience better than ever
            </p>
          </div>
          {/* Database */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column serv-cards grow"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={DB}
              alt="custom websites"
              style={{
                height: "5rem",
                width: "5rem",
                paddingBottom: ".4rem",
                marginTop: "1.7rem",
                marginLeft: "2.2rem",
              }}
            />
            <h2
              className="is-size-3"
              style={{ paddingBottom: ".7rem", marginLeft: "1rem" }}
            >
              Database
            </h2>
            <p
              className={""}
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
            className="column is-one-forth is-flex is-flex-direction-column serv-cards grow"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={SEO}
              alt="custom websites"
              style={{
                height: "5rem",
                width: "5rem",
                paddingBottom: ".4rem",
                marginTop: "1.7rem",
                marginLeft: "2.2rem",
              }}
            />
            <h2
              className="is-size-3"
              style={{ paddingBottom: ".7rem", marginLeft: "1rem" }}
            >
              Search Engine Opt. (SEO)
            </h2>
            <p
              className={""}
              style={{
                paddingBottom: "1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Want more traffic driven to your website? Let us enhance your
              organic ranking so you're easier to find.
            </p>
          </div>
        </div>

        <div
          className="columns"
          style={{ marginLeft: "1rem", marginRight: "1rem", rowGap: "1rem" }}
        >
          {/* Analytic Dashboards */}
          <div
            className="column is-one-forth is-flex is-flex-direction-column serv-cards grow"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={Analytics}
              alt="Analytic Dashboards"
              style={{
                height: "5rem",
                width: "5rem",
                paddingBottom: ".4rem",
                marginTop: "1.7rem",
                marginLeft: "2.2rem",
              }}
            />
            <h2
              className="is-size-3 "
              style={{ paddingBottom: ".7rem", marginLeft: "1rem" }}
            >
              Analytic Dashboards
            </h2>
            <p
              className={""}
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
            className="column is-one-forth is-flex is-flex-direction-column  serv-cards grow"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={LogoDesign}
              alt="custom websites"
              style={{
                height: "5rem",
                width: "5rem",
                paddingBottom: ".4rem",
                marginTop: "1.7rem",
                marginLeft: "2.2rem",
              }}
            />
            <h2
              className="is-size-3"
              style={{
                paddingBottom: ".7rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Logo Design
            </h2>
            <p
              className={""}
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
            className="column is-one-forth is-flex is-flex-direction-column serv-cards grow"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={WebRevamp}
              alt="custom websites"
              style={{
                height: "5rem",
                width: "5rem",
                paddingBottom: ".4rem",
                marginTop: "1.7rem",
                marginLeft: "2.2rem",
              }}
            />
            <h2
              className="is-size-3"
              style={{
                paddingBottom: ".7rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              Site Revamp
            </h2>
            <p
              className={""}
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
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="has-text-centered">
          <h1
            className="is-size-1 is-size-2-mobile"
            style={{ fontWeight: "boldest", marginBottom: ".6rem" }}
          >
            Our Process
          </h1>
          <div className="is-flex is-justify-content-center" style={{}}>
            <div
              className="justify-content-center"
              style={{
                background: "linear-gradient(to right, #972EFF , #ff934f)",
                height: ".18rem",
                width: "5%",
                marginBottom: "1.3rem",
              }}
            ></div>
          </div>
          <div className="is-flex is-justify-content-center">
            <p
              className="is-size-4 is-size-5-mobile has-text-centered"
              style={{
                paddingBottom: "5.5rem",
                maxWidth: "48rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Have a great idea that you want to validate or want to start scaling?
              With our flexible process you will get everything you need with maximum
              efficiency. 
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
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div className="conta right">
            <i className="icon fa fa-gift"></i>
            <div className="content">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div className="conta left">
            <i className="icon fa fa-user"></i>
            <div className="content">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div className="conta right">
            <i className="icon fa fa-fire"></i>
            <div className="content">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div className="conta left">
            <i className="icon fa fa-cog"></i>
            <div className="content">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
          <div className="conta right">
            <div className="date">Finish</div>
            <i className="icon fa fa-certificate"></i>
            <div className="content">
              <h2>className ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                erat sagittis non. Ut blandit semper pretium.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container" style={{ marginTop: "9rem" }}>
        <div className="columns">
          <div className="column is-one-third" style={{ backgroundColor: "#232323 ", borderRadius: "1rem", marginRight: ".5rem", marginLeft: ".5rem" }}>
            <div style={{ padding: ".5rem .5rem 1rem .5rem" }}>
              <div style={{ marginTop: ".4rem" }}>
                <h1 className="is-size-2" style={{ fontWeight: "bolder" }}>
                  Client First
                </h1>
                <p className="is-size-4" style={{ marginTop: "1rem" }}>
                  Traditional consultants have transactional relationships with candidates.
                </p>
                <p className="is-size-4" style={{ fontWeight: "bolder", color: "#972eff" }}>We're different</p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ display: "flex", alignItems: "center", width: "5.5rem", marginRight: "1rem" }}>
                    <img src={check} alt="developers" style={{ height: "2.5rem", width: "2.5rem" }} />
                  </div>
                  <h1 className="is-size-5">Putting our clients in the center of everything we do is highest priority</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", width: "5.5rem", marginRight: "1rem" }}>
                    <img src={check} alt="developers" style={{ height: "2.5rem", width: "2.5rem" }} />
                  </div>
                  <h1 className="is-size-5">We want to know your future goals so we can help meet them</h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", width: "5.5rem", marginRight: "1rem" }}>
                    <img src={check} alt="developers" style={{ height: "2.5rem", width: "2.5rem" }} />
                  </div>
                  <h1 className="is-size-5">Our goal is the be the best and that will always reflect in our services</h1>
                </div>
              </div>

              <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                <a href="/contact">
                  <button
                    type="submit"
                    className="button grow is-size-5"
                    style={{
                      borderColor: "#972EFF ",
                      color: "white",
                      backgroundColor: "black",
                      width: "15rem",
                      height: "3rem"
                    }}
                  >
                    Get A Free Quote
                  </button>
                </a>
              </div>

            </div>
          </div>


          <div className="column is-two-thirds" style={{ marginRight: ".5rem", marginLeft: ".5rem" }}>
            <img className="img-cta" src={cta} alt="software development trust quality" />
          </div>



        </div>
      </div>

      {/* Our Work */}
      <section style={{ paddingTop: "2.2rem", marginTop: "6.9rem" }}>
        <div className="has-text-centered">
          <h1
            className="is-size-1 is-size-2-mobile"
            style={{ fontWeight: "boldest", marginBottom: ".7rem" }}
          >
            Our Work
          </h1>
          <div className="is-flex is-justify-content-center" style={{}}>
            <div
              className="justify-content-center"
              style={{
                background: "linear-gradient(to right, #972EFF , #ff934f)",
                height: ".18rem",
                width: "5%",
                marginBottom: "1.3rem",
              }}
            ></div>
          </div>
          <div className="is-flex is-justify-content-center">
            <p
              className="is-size-4 is-size-5-mobile has-text-centered"
              style={{
                paddingBottom: "3rem",
                paddingRight: ".3rem",
                paddingLeft: ".3rem",
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

        <div class="wrapper">
          <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <a
                href="https://coinbullapp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div class="container">
                  <div class="front" style={{ backgroundImage: `url(${ex1})` }}>
                    <div class="inner">
                      <p>CoinBull</p>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>
                        A crypto application that gives users insight on current
                        market conditions, allowing users to log in and save
                        their favorite coins. With charting ability of
                        individual crypto's.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <a
                href="https://coinbullapp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div class="container">
                  <div class="front" style={{ backgroundImage: `url(${ex1})` }}>
                    <div class="inner">
                      <p>CoinBull</p>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>
                        A crypto application that gives users insight on current
                        market conditions, allowing users to log in and save
                        their favorite coins. With charting ability of
                        individual crypto's.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </a>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <a
                href="https://coinbullapp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div class="container">
                  <div class="front" style={{ backgroundImage: `url(${ex1})` }}>
                    <div class="inner">
                      <p>CoinBull</p>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>
                        A crypto application that gives users insight on current
                        market conditions, allowing users to log in and save
                        their favorite coins. With charting ability of
                        individual crypto's.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </a>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <a
                href="https://coinbullapp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div class="container">
                  <div class="front" style={{ backgroundImage: `url(${ex1})` }}>
                    <div class="inner">
                      <p>CoinBull</p>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>
                        A crypto application that gives users insight on current
                        market conditions, allowing users to log in and save
                        their favorite coins. With charting ability of
                        individual crypto's.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </a>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <a
                href="https://coinbullapp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div class="container">
                  <div class="front" style={{ backgroundImage: `url(${ex1})` }}>
                    <div class="inner">
                      <p>CoinBull</p>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>
                        A crypto application that gives users insight on current
                        market conditions, allowing users to log in and save
                        their favorite coins. With charting ability of
                        individual crypto's.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </a>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <a
                href="https://coinbullapp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div class="container">
                  <div class="front" style={{ backgroundImage: `url(${ex1})` }}>
                    <div class="inner">
                      <p>CoinBull</p>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>
                        A crypto application that gives users insight on current
                        market conditions, allowing users to log in and save
                        their favorite coins. With charting ability of
                        individual crypto's.
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container" style={{ maxWidth: "76rem", marginBottom: "4rem", marginTop: "8.5rem" }}>
        <div className="columns" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
          <div className="column is-two-third is-flex-direction-column is-flex-align-items-center" style={{ marginTop: "8rem" }}>
            <div style={{ marginBottom: "4rem" }}>
              <h2 className="is-size-3" style={{ fontWeight: "bolder", marginBottom: "1.5rem" }}> Get Your Free Quote Today with <a href="/contact"><span className="grow" style={{ color: "#972eff", fontWeight: "1000" }}>Digifie</span></a></h2>
              <a href="/contact">
                <button
                  type="submit"
                  className="button grow"
                  style={{
                    borderColor: "#972EFF ",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Get A Free Quote
                </button>
              </a>
            </div>
          </div>

          <div className="column is-one-third is-size-5" style={{ fontWeight: "bolder" }}>

            <div className="grow" style={{ marginBottom: "1.5rem" }}>1. Intro call: <span style={{ color: "#959595" }}>Let's deep-dive into the profile requirement & collect extensive qualitative & quantitive traits you're looking for</span></div>

            <div className="grow" style={{ marginBottom: "1.5rem" }}>2. We get to work: <span style={{ color: "#959595" }}>We'll canvas existing relationships and the market using hyper-targeted searches to identify perfect candidates to interview</span></div>

            <div className="grow">3. Hire your dream team: <span style={{ color: "#959595" }}>We promise a better experience and faster time-to-hires than the traditional firms
            </span></div>


          </div>


        </div>

      </div>
    </div>
  );
};

export default Home;
