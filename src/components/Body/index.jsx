import { useState } from "react";
import InputGroup from "../InputGroup";
import ResultTable from "../ResultTable";
import { INITIAL_INVESTMENT_DATA } from "../../constants";

const Body = () => {
  const [investmentStats, setInvestmentStats] = useState(
    INITIAL_INVESTMENT_DATA
  );

  const isValidInput = investmentStats.duration >= 1;

  const handleChange = (event, key) => {
    setInvestmentStats((prevStats) => {
      return {
        ...prevStats,
        [key]: +event.target.value,
      };
    });
  };

  return (
    <>
      <InputGroup onChange={handleChange} stats={investmentStats} />
      {isValidInput ? (
        <ResultTable stats={investmentStats} />
      ) : (
        <p className="center">Enter duration greater than zero</p>
      )}
    </>
  );
};

export default Body;
