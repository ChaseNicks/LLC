import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjwjgga");
  if (state.succeeded) {
    return <div className="is-flex is-justify-content-center is-align-items-center" style={{ height: "30rem"}}><div><p className="m12">Thank You for Contacting Us!</p></div></div>;
  }

  return (
    <div className="is-align-items-center">
      <h2
        className="has-text-centered is-size-2"
        style={{ 
          marginTop: "5rem",
        }}
      >
        CONTACT US{" "}
      </h2>
      <div className="is-flex is-justify-content-center" style={{}}><div
        className="justify-content-center"
        style={{
          background: "linear-gradient(to right, #972EFF , #E197FD)",
          height: ".2rem",
          width: "12%",
          marginBottom: "3rem"
        }}
      ></div></div>
      <div className="is-flex is-justify-content-center">
      <p
        className="has-text-centered is-size-4"
        style={{ width: "75%"}}
        >
        Let Digifie help you with all your digital needs. There are multiple 
        ways to contact us so choose which one is best for you. Lets 
        start building your dream site.{" "}
      </p>
      </div> 

      <div className="container" style={{ marginLeft: "3rem", marginRight: "3rem"}}>
      <form onSubmit={handleSubmit}>
        <div id="contact-form" className="">
          <div className="field flex is-flex-shrink-1 is-flex-direction-column is-centered">
            <label className="c-lab">Email</label>
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

          <div className="field flex is-flex-shrink-1 is-flex-direction-column">
            <label className="c-lab">Message</label>
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
                  className="button is-rounded"
                  style={{  borderColor: "#972EFF "  }}
                >
                  Submit
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-rounded"
                  style={{ borderColor: "#972EFF " }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
