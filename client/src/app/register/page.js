"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import { useState } from "react";
import CustomNavbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /[!@#$%^&*]/,
          "Password must contain at least one special character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
      acceptTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle registration logic here
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900">
      <CustomNavbar />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Create Your Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Join us and experience virtual try-on shopping
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      className={`appearance-none relative block w-full pl-12 pr-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                        formik.touched.firstName && formik.errors.firstName
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="First Name"
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="mt-1 text-sm text-red-500">
                      {formik.errors.firstName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      className={`appearance-none relative block w-full pl-12 pr-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                        formik.touched.lastName && formik.errors.lastName
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Last Name"
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="mt-1 text-sm text-red-500">
                      {formik.errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`appearance-none relative block w-full pl-12 pr-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Email address"
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`appearance-none relative block w-full pl-12 pr-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Phone number"
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`appearance-none relative block w-full pl-12 pr-12 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={`appearance-none relative block w-full pl-12 pr-12 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </div>

              <div className="flex items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.acceptTerms}
                  className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-purple-600 focus:ring-purple-600"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 block text-sm text-gray-400"
                >
                  I accept the{" "}
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    terms and conditions
                  </a>
                </label>
              </div>
              {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.acceptTerms}
                </p>
              ) : null}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-150 hover:scale-[1.02]"
              >
                Create Account
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-purple-500 hover:text-purple-400"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
