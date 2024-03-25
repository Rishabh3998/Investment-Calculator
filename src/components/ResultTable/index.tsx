import React from "react";

const ResultTable = () => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>$16,725</td>
          <td>$825</td>
          <td>$825</td>
          <td>$15,900</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
