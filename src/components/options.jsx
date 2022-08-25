// import {
//   RadioGroup,
//   RadioButton,
//   ReversedRadioButton,
// } from "react-radio-buttons";

const Options = ({ answer }) => {
  //   const { option } = answer;
  return (
    <div className="options">
      <input type="radio" value={answer[0].option} name={answer[0].option} />{" "}
      {answer[0].option};
    </div>
  );
};

export default Options;
