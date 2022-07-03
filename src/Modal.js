import React from "react";

import { FaTimes } from "react-icons/fa";

import logo from "./images/pic.jpg";

const Modal = ({ setModel }) => {
  return (
    <section className="modal">
      <div className="modalCenter">
        <button className="delete" onClick={() => setModel(false)}>
          <FaTimes></FaTimes>
        </button>
        <p>
          Everything I spoke here is about Retail Category of telangana State
          government DISCOM company, TSNPCDL.
        </p>
        <p>
          <b>
            How can we know howmany units we consumed? Please check below pic.
          </b>
        </p>
        <img src={logo} />
        <p>---------------------</p>
        <p>
          Every 100 is a danger zone. If you observe the sudden hike in the bill
          from 99, 100, 101 units,
        </p>
        <img src={require("./images/bill1.png")} />
        <p>Also for 199, 200, 201 units</p>
        <img src={require("./images/bill2.png")} />
        <p>
          You can check for remaining units at each 100 multiple dead zone. But
          you won't see significant hike at each 100 after crossing 400 units.
        </p>
        <p>
          But if we can reduce units per each meter by using 2 meters, we can
          save few bucks. If you are consuming less than 100 units, there is no
          point of ordering new meter which costs around Rs.500. If you are
          using more than 100, you should probably try insrting new meters and
          save few bucks. If your units are crossing 300 units, you should
          definitely go for solar pannels
        </p>
        <p>
          If your units are between 100-200, use two meters and bring both
          meters to less than 100.
        </p>
        <img src={require("./images/bill3.png")} alt="" />
        <p>
          If your units are between 200-300,use two meters and bring both meters
          to less than 150.
        </p>
        <img src={require("./images/bill4.png")} alt="" />

        <p>
          <b>Note-1: </b>Actual bills may vary by +50 or -50.
        </p>
        <p>
          <b>Note-2: </b>This calculator only works for Telangana state and that
          too for only retail category.
        </p>
      </div>
    </section>
  );
};

export default Modal;
