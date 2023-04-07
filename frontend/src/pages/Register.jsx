import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="text-2xl font-bold mb-12 px-5 py-0">
        <h1 className="mb-2">
          <FaUser /> Register
        </h1>
        <p className="text-[#5b5152]">Please create an account</p>
      </section>

      <section className="w-[70%] my-0 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
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
              className="w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="w-[100%] p-3 border border-solid border-[#e6e6e6] rounded mb-2.5"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn w-full mb-5 hover:scale-95">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
