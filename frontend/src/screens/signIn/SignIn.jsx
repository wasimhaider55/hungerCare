import logo from "../../assets/logoo.png";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../Schema";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        // await console.log(values);
        const res = await axios.post("/LogIn", values);
        if (res.status === 201) {
          toast.success("LogIn successfully");
          action.resetForm();
          navigate("/");
          console.log(res);
        }
      },
    });

  return (
    <div className="flex justify-center items-center p-1 h-screen  ">
      <div className=" md:flex w-full  md:w-[60%] justify-center items-center   shadow-xl rounded-lg bg-[#004d73] ">
        <div className="flex flex-col w-full justify-center items-center">
          <img
            className="h-[12rem] md:h-[20rem] md:w-[20rem]"
            src={logo}
            alt="Workflow"
          />
        </div>
        <div className="  flex flex-col w-full justify-center  rounded-r-lg ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="  py-8 px-4  sm:rounded-lg sm:px-10 ">
              <div className="flex space-x-24 mb-4">
                <h2 className="  text-3xl font-extrabold text-gray-200">
                  SignIn
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.email && errors.email ? (
                    <p className="text-white">{errors.email}</p>
                  ) : null}
                </div>

                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border-b border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {touched.password && errors.password ? (
                    <p className="text-white">{errors.password}</p>
                  ) : null}
                </div>

                <div className="pt-5">
                  <button
                    id="signup"
                    name="signup"
                    type="submit"
                    className="w-full flex justify-center py-1.5 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-[#004d73] bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign In
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

export default SignIn;
