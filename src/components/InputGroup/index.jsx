import { calculateInvestmentResults } from "../../util/investment";
import { INITIAL_INVESTMENT_DATA } from "../../constants";

const InputGroup = ({ onChange, stats: investmentStats }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input
            onChange={(e) => onChange(e, "initialInvestment")}
            type="number"
            value={investmentStats?.initialInvestment}
          ></input>
        </div>
        <div>
          <label>Annual investment</label>
          <input
            onChange={(e) => onChange(e, "annualInvestment")}
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
            onChange={(e) => onChange(e, "expectedReturn")}
            type="number"
            value={investmentStats?.expectedReturn}
          ></input>
        </div>
        <div>
          <label>Duration</label>
          <input
            onChange={(e) => onChange(e, "duration")}
            type="number"
            value={investmentStats?.duration}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
