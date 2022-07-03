import React from "react";

const List = ({ list, deleteItem, setList }) => {
  return (
    <section className="list">
      {list.map(({ id, bill, units }) => {
        return (
          <article className="item" key={id}>
            <p>
              Units : <b>{units} </b>
            </p>
            <p>
              Bill : <b>Rs. {bill} </b>
            </p>
            <p id="delete" onClick={() => deleteItem(id)}>
              Delete
            </p>
          </article>
        );
      })}
      <button className="delete" onClick={() => setList([])}>
        Delete All
      </button>
    </section>
  );
};

export default List;
