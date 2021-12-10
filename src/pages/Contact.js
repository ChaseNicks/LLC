import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjwjgga");
  if (state.succeeded) {
    return <p>Thank You for Contacting Us!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="contact-form" className="">
        <div className="field flex is-flex-shrink-1 is-flex-direction-column">
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
          <div className="field is-grouped">
            <div className="control">
              <button
                type="submit"
                disabled={state.submitting}
                className="button is-primary is-outlined is-rounded"
                style={{ color: "white" }}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                className="button is-primary is-outlined is-rounded"
                style={{ color: "white" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
