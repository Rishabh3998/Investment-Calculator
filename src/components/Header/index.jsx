import calculatorImg from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={calculatorImg} alt="calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
