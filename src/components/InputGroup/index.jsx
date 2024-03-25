import { useState } from "react";
import { calculateInvestmentResults } from "../../util/investment";
import { INITIAL_INVESTMENT_DATA } from "../../constants";

const InputGroup = ({ stats }) => {
  const [investmentStats, setInvestmentStats] = useState(
    INITIAL_INVESTMENT_DATA
  );

  const handleChange = (event, key) => {
    setInvestmentStats((prevStats) => {
      return {
        ...prevStats,
        [key]: event.target.value,
      };
    });
  };

  stats(investmentStats);

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input
            onChange={(e) => handleChange(e, "initialInvestment")}
            type="number"
            value={investmentStats?.initialInvestment}
          ></input>
        </div>
        <div>
          <label>Annual investment</label>
          <input
            onChange={(e) => handleChange(e, "annualInvestment")}
            type="number"
            value={investmentStats?.annualInvestment}
          ></input>
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label>Expected return</label>
          <input
            onChange={(e) => handleChange(e, "expectedReturn")}
            type="number"
            value={investmentStats?.expectedReturn}
          ></input>
        </div>
        <div>
          <label>Duration</label>
          <input
            onChange={(e) => handleChange(e, "duration")}
            type="number"
            value={investmentStats?.duration}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
