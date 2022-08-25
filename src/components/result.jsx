import { useLocation } from "react-router-dom";
const Result = (props) => {
  const location = useLocation();
  const { score } = location.state;

  return (
    <>
      <h1>Your Score: {score} </h1>;
    </>
  );
};

export default Result;
