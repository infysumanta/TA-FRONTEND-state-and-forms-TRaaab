import React from "react";

const Form = () => (
  <div>
    <div className="form">
      <form>
        <div className="title">
          <h2>Shipping & Billing</h2>
        </div>
        <div className="shipping">
          <h3>Shipping Address</h3>

          <div className="row1">
            <div className="first-name">
              <label for="">First Name</label>
              <input type="text" />
            </div>
            <div className="last-name">
              <label for="">Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="row2">
            <div className="address">
              <label for="">Address</label>
              <input type="text" />
            </div>
            <div className="postal-code">
              <label for="">ZIP/Postal Code</label>
              <input type="text" />
            </div>
          </div>

          <div className="row3">
            <div className="city">
              <label for="">City</label>
              <input type="text" />
            </div>
            <div className="country">
              <div className="label">
                <label for="">Country</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="billing">
          <h3>Billing Address</h3>

          <div className="row1">
            <div className="checkbox">
              <input type="checkbox" />
              <label>
                <strong>
                  Is the Billing Address the same as the Shipping Address?
                </strong>
              </label>
            </div>
          </div>

          <div className="row2">
            <div className="first-name">
              <label for="">First Name</label>
              <input type="text" />
            </div>
            <div className="last-name">
              <label for="">Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="row3">
            <div className="address">
              <label for="">Address</label>
              <input type="text" />
            </div>
            <div className="postal-code">
              <label for="">ZIP/Postal Code</label>
              <input type="text" />
            </div>
          </div>

          <div className="row4">
            <div className="city">
              <label for="">City</label>
              <input type="text" />
            </div>
            <div className="country">
              <div className="label">
                <label for="">Country</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="row5">
          <div className="button">
            <button>Go Back</button>
          </div>
          <div className="button">
            <button>Next Step ></button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Form;
