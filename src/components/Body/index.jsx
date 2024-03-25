import { useState } from "react";
import InputGroup from "../InputGroup";
import ResultTable from "../ResultTable";
import { INITIAL_INVESTMENT_DATA } from "../../constants";

const Body = () => {
  const [stats, setStats] = useState(INITIAL_INVESTMENT_DATA);
  const investmentStats = (stats) => {
    setStats(stats);
  };

  return (
    <>
      <InputGroup stats={investmentStats} />
      <ResultTable stats={stats} />
    </>
  );
};

export default Body;
