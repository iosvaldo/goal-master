import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { memo } from "react";
import debounce from "lodash/debounce";

const GoalItem = memo(({ goal }) => {
  const dispatch = useDispatch();

  const debouncedDelete = debounce(() => {
    dispatch(deleteGoal(goal._id));
  }, 600);

  return (
    <div className="bg-[#f4f4f4] hover:shadow-md my-2.5 mx-0 px-4 pt-5 pb-2 relative shadow rounded-2xl ">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2 >{goal.text}</h2>
      <button
        onClick={debouncedDelete}
        className="mx-2 hover:text-[red] hover:scale-95  hover:font-bold text-sm absolute top-1 right-3 cursor-pointer border:none bg-none"
      >
        X
      </button>
    </div>
  );
});

export default GoalItem;
