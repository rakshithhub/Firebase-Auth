import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/ReactAuthContext";

export const UserSignUp = () => {
  const { Signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await Signup(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="bg-indigo-950 w-full h-screen flex justify-center items-center p-5">
        <div className="w-[567px] p-5 bg-white rounded-lg">
          <div className="">
            <h2 className="font-bold text-3xl text-black font-serif text-center">
              Sign Up
            </h2>

            {error ? <p className="text-white bg-red-600 rounded-md">{error}</p> : ""}
            <form className="mt-3" onSubmit={handleSubmit}>

              <label htmlFor="email" className="text-xl font-bold  font-serif">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="border border-slate-500 mt-2 mb-3 p-2 rounded-md w-full outline-none font-bold"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label
                htmlFor="password"
                className="text-xl font-bold mt-5 font-serif"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="border border-slate-500 mt-2 mb-3 p-2 rounded-md w-full outline-none font-bold"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-indigo-950 p-2 w-full text-center mt-3 mb-3 font-bold text-2xl text-white">
                Sign up
              </button>
              <p className="font-bold font-sans text-lg">
                Already have an account?
                <Link to="/" className="inline-block px-4 text-red-600">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
