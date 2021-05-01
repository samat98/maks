import React from "react";

const Radio = ({ op }) => {
  return (
    <div className="d-flex align-items-center">
      <input className="mr-1" name="choice" type="radio" value={op.choice} />
      <label>
        {op.choice}) {op.choice_text}
      </label>
      <input name="choice_text" type="hidden" value={op.choice_text} />
    </div>
  );
};

export default Radio;
