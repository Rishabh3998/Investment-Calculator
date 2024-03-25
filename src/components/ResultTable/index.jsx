import React from "react";
import {
  calculateInvestmentResults,
  formatter,
  transformResultData,
} from "../../util/investment";

const ResultTable = ({ stats }) => {
  const result = calculateInvestmentResults(stats);
  console.log(result);
  const formattedResult = transformResultData(result);
  console.log({ formattedResult });
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
        {formattedResult?.map((item, index) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.investmentValue)}</td>
              <td>{formatter.format(item.interestPerYear)}</td>
              <td>{formatter.format(item.totalInterest)}</td>
              <td>{formatter.format(item.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
