import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="text-2xl font-bold mb-12 px-5 py-0">
        <h1 className="mb-2">
          <FaSignInAlt /> Login
        </h1>
        <p className="text-[#5b5152]">Login and start setting goals</p>
      </section>

      <section className="w-[70%] my-0 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn w-full mb-5">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
