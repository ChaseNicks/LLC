import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import anime from "animejs";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjwjgga");
  // if (state.succeeded) {
  //   return (
  //     <div
  //       className="is-flex is-justify-content-center is-align-items-center"
  //       style={{ height: "30rem" }}
  //     >
  //       <div>
  //         <h1 className="ml2">Thank you for reaching out!</h1>
  //       </div>
  //     </div>
  //   );
  // }

  // const textWrapper = document.querySelector(".ml2");
  // textWrapper.innerHTML = textWrapper.textContent.replace(
  //   /\S/g,
  //   "<span class='letter'>$&</span>"
  // );

  // anime
  //   .timeline({ loop: true })
  //   .add({
  //     targets: ".ml2 .letter",
  //     scale: [4, 1],
  //     opacity: [0, 1],
  //     translateZ: 0,
  //     easing: "easeOutExpo",
  //     duration: 950,
  //     delay: (el, i) => 70 * i,
  //   })
  //   .add({
  //     targets: ".ml2",
  //     opacity: 0,
  //     duration: 1000,
  //     easing: "easeOutExpo",
  //     delay: 1000,
  //   });

  return (
    <div className="">
      <h2
        className="has-text-centered is-size-1"
        style={{
          marginTop: "5rem",
          marginBottom: "1rem",
          fontWeight: "boldest",
        }}
      >
        CONTACT US{" "}
      </h2>
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
          className="has-text-centered is-size-4"
          style={{
            maxWidth: "40rem",
            marginBottom: "3rem",
            fontWeight: "bold",
          }}
        >
          Let Digifie help you with all your digital needs. There are multiple
          ways to contact us, choose which one is best for you. Lets start
          building your dream website.{" "}
        </p>
      </div>

      <div
        style={{
          marginLeft: "3rem",
          marginRight: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ width: "29rem", marginBottom: "2.5rem" }}
        >
          <div id="contact-form" className="">
            <div
              className="field is-flex is-flex-shrink-1 is-flex-direction-column is-centered"
              style={{ paddingBottom: ".5rem" }}
            >
              <label
                className="c-lab is-flex is-flex-start"
                style={{ paddingBottom: ".2rem", fontWeight: "bold" }}
              >
                Email
              </label>
              <div className="control ">
                <input
                  className="input "
                  type="email"
                  placeholder="hello@"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div
              className="field flex is-flex-shrink-1 is-flex-direction-column"
              style={{ paddingBottom: ".8rem" }}
            >
              <label
                className="c-lab is-flex is-flex-start"
                style={{ paddingBottom: ".2rem", fontWeight: "bold" }}
              >
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="btn-style">
              <div className="field is-grouped is-flex is-justify-content-center">
                <div className="control ">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="button"
                    style={{ borderColor: "#972EFF", fontWeight: "bold" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div
        style={{
          background: "black",
          height: "25rem",
          marginBottom: "4rem",
          marginTop: "4rem",
        }}
      >
        <h2
          className="is-flex is-justify-content-center is-size-1"
          style={{
            color: "white",
            paddingTop: "3.3rem",
            fontWeight: "boldest"
          }}
        >
          FOLLOW US{" "}
        </h2>
        <div className="is-flex is-justify-content-center" style={{}}>
          <div
            className="justify-content-center"
            style={{
              background: "linear-gradient(to right, #972EFF , #E197FD)",
              height: ".18rem",
              width: "5%",
              marginTop: "1rem",
              marginBottom: "3.8rem",
            }}
          ></div>
        </div>
        <div className="is-flex is-justify-content-center">
        <a
            href="https://www.linkedin.com/company/digifie/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              style={{ backgroundColor: "white" }}
              src={linkedin}
              alt="LinkedIn"
            />
          </a>
          </div>
      </div>
      <h2
        className="has-text-centered is-size-1"
        style={{
          marginTop: "5rem",
          marginBottom: "1rem",
          fontWeight: "boldest",
        }}
      >
        THE PROCESS{" "}
      </h2>
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
      
      </div>
    </div>
  );
};

export default Contact;
