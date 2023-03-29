import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { memo } from "react";
import debounce from "lodash/debounce";

const GoalItem = memo(({ goal }) => {
  const dispatch = useDispatch();

  const debouncedDelete = debounce(() => {
    dispatch(deleteGoal(goal._id));
  }, 500);

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={debouncedDelete} className="close">
        X
      </button>
    </div>
  );
});

export default GoalItem;
