import logo from "../../assets/logoo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { registrationSchema } from "../Schema";

const SignUp = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        password: "",
        cpassword: "",
      },
      validationSchema: registrationSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        try {
          const reg = await axios.post("/registration", values);
          if (reg.status === 201) {
            toast.success("register successfully");
            navigate("/signin");
          }
        } catch (error) {
          toast.error("something went wrong!");
        }
      },
    });

  return (
    <div className="flex justify-center items-center p-1 h-screen ">
      <div className=" md:flex w-full  md:w-[60%] justify-center  items-center shadow-xl rounded-lg bg-[#004d73] ">
        <div className="flex flex-col w-full justify-center items-center">
          <img
            className="h-[12rem] md:h-[20rem] md:w-[20rem]"
            src={logo}
            alt="Workflow"
          />
        </div>
        <div className="  flex flex-col w-full justify-center bg-slate-100 rounded-r-lg ">
          <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
              <div className="flex space-x-24 mb-4">
                <h2 className="  text-3xl font-extrabold text-gray-700">
                  SignUp
                </h2>
                <p className="text-gray-500">
                  already have an account{" "}
                  <Link to="/signin">
                    <span className="text-blue-600">SignIn</span>
                  </Link>
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={values.name}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.name && errors.name ? <p>{errors.name}</p> : null}
                </div>

                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="off"
                    placeholder="Phone"
                    required
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.phone && errors.phone ? <p>{errors.phone}</p> : null}
                </div>

                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.email && errors.email ? <p>{errors.email}</p> : null}
                </div>

                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.password && errors.password ? (
                    <p>{errors.password}</p>
                  ) : null}
                </div>

                <div className="mt-1">
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    required
                    value={values.cpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.cpassword && errors.cpassword ? (
                    <p>{errors.cpassword}</p>
                  ) : null}
                </div>

                <div className="pt-5">
                  <button
                    id="signup"
                    name="signup"
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
