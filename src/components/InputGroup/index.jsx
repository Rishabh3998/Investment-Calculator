import { useState } from "react";

const INITIAL_INVESTMENT_DATA = {
  initialInvestment: "",
  annualInvestment: "",
  return: "",
  duration: "",
};

const InputGroup = () => {
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

  console.log({ investmentStats });

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input onChange={(e) => handleChange(e, "initialInvestment")}></input>
        </div>
        <div>
          <label>Annual investment</label>
          <input onChange={(e) => handleChange(e, "annualInvestment")}></input>
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label>Expected return</label>
          <input onChange={(e) => handleChange(e, "return")}></input>
        </div>
        <div>
          <label>Duration</label>
          <input onChange={(e) => handleChange(e, "duration")}></input>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
