import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="w-[70%] my-0 mx-auto">
      <form onSubmit={onSubmit}>
        <div className=" mb-3">
          <label className="text-left block mb-1 ml-1 mt-0 mr-0" htmlFor="text">
            Enter your Goal
          </label>
          <input
            className="w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder="Enter your Goal"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className=" mb-3 ">
          <button className="btn w-full mb-5" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
