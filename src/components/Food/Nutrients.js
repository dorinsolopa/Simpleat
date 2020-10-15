import React from "react";

const Nutrients = (props) => {
  const { nutrients } = props;
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Amount</th>
          <th scope="col">%RI</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map((item) => {
          return (
            <tr>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.ri}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  
  );
};
export default Nutrients;
