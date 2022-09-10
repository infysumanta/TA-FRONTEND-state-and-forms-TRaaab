import React from "react";

export default function Uncontrolled() {
  let address = React.createRef();
  let zip = React.createRef();
  let city = React.createRef();
  let country = React.createRef();
  function handleCheckbox(e) {}
  return (
    <>
      <h1
        className="is-size-3 has-text-centered has-text-weight-bold"
        style={{ marginTop: "2rem" }}
      >
        Uncontrolled Component
      </h1>
      <div className="columns is-mobile is-3">
        <div className="column main-heading" style={{ marginTop: "3rem" }}>
          <h1 className="is-size-3 has-text-primary">Shipping Address</h1>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                className="input"
                ref={address}
                type="text"
                placeholder="e.g New Delhi Vasnat Vihar"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">ZIP/Postal Code</label>
            <div className="control">
              <input
                className="input"
                ref={zip}
                type="text"
                placeholder="e.g. 176057"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input
                ref={city}
                className="input"
                type="text"
                placeholder="e.g New Delhi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <input
                className="input"
                ref={country}
                type="text"
                placeholder="e.g India"
              />
            </div>
          </div>
        </div>
        <div className="column main-heading" style={{ marginTop: "3rem" }}>
          <div className="field">
            <h1 className="is-size-3 has-text-primary">Billing Address</h1>
            <div className="control">
              <label className="checkbox">
                <input onChange={handleCheckbox} type="checkbox" /> Same as the
                Shipping Address?
              </label>
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g New Delhi Vasnat Vihar"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">ZIP/Postal Code</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g. 176057" />
            </div>
          </div>
          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g New Delhi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g India" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
