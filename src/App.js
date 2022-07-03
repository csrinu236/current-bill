import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import Modal from "./Modal";
import { BsInfoCircle } from "react-icons/bs";

const App = () => {
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const [isModelOpen, setModel] = useState(false);

  const focusRef = useRef(null);

  const [list, setList] = useState([]);

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let bill = 0;

    let units = parseInt(focusRef.current.value);
    if (!units || units < 0) {
      focusRef.current.value = null;
      return;
    }
    if (units <= 100) {
      if (units <= 50) {
        bill += units * 1.95 * 1.029 + 40;
      } else {
        bill += (50 * 1.95 + (units - 50) * 3.1) * 1.029 + 70;
      }
    } else if (units <= 200) {
      bill += (100 * 3.4 + (units - 100) * 4.8) * 1.029 + 90;
    } else {
      if (units <= 300) {
        bill += (200 * 5.1 + (units - 200) * 7.7) * 1.029 + 100;
      } else if (units <= 400) {
        bill += (200 * 5.1 + 100 * 7.7 + (units - 300) * 9) * 1.029 + 120;
      } else if (units <= 800) {
        bill +=
          (200 * 5.1 + 100 * 7.7 + 100 * 9 + (units - 400) * 9.5) * 1.029 + 140;
      } else {
        bill +=
          (200 * 5.1 + 100 * 7.7 + 100 * 9 + 400 * 9.5 + (units - 800) * 10) *
            1.029 +
          160;
      }
    }
    bill += 20;
    setList([
      ...list,
      { units, bill: bill.toFixed(2), id: new Date().getTime().toString() },
    ]);
    focusRef.current.value = null;
  };

  return (
    <>
      <section className="section">
        {isModelOpen && <Modal setModel={setModel}></Modal>}
        <div className="section-center fixed-center">
          <form className="form" onSubmit={submitHandler}>
            <button
              type="button"
              className="btn docBtn"
              onClick={() => setModel(true)}>
              <BsInfoCircle></BsInfoCircle>
            </button>
            <div className="section-title">
              <h3>Current Bill Generator</h3>
            </div>
            <div className="formControl">
              <input
                type="number"
                className="alert"
                ref={focusRef}
                placeholder="Enter no.of units(0-2000) e.g. 125"
              />
              <button className="btn">submit</button>
            </div>
            {list.length > 0 && (
              <List
                list={list}
                deleteItem={deleteItem}
                setList={setList}></List>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default App;
