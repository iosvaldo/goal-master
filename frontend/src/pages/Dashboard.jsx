import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
  }, [isError, message]);

  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="text-2xl font-bold mb-12 px-5 py-0">
        <h1 className="mb-2">Welcome {user && user.name}</h1>
        <p className="text-[#5b5152]">Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className="w-[70%] m-auto">
        {goals.length > 0 ? (
          <div className="grid gap-4 lg:grid-row-2 2xl:grid-row-3 lg:grid-cols-2 2xl:grid-cols-3 overflow-y-auto mt-10 max-h-[500px]  ">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
