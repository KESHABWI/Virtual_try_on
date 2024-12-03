"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegistrationForm = () => {
  const phoneRegExp = /^\+?1?\d{9,15}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters")
      .matches(
        /^[a-zA-Z0-9_-]+$/,
        "Username can only contain letters, numbers, underscores, and dashes"
      )
      .required("Username is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    height: Yup.number()
      .positive("Height must be positive")
      .required("Height is required"),
    weight: Yup.number()
      .positive("Weight must be positive")
      .required("Weight is required"),
    chest: Yup.number().positive("Chest measurement must be positive"),
    waist: Yup.number().positive("Waist measurement must be positive"),
    hips: Yup.number().positive("Hips measurement must be positive"),
    profileImageURL: Yup.string().url("Invalid URL format"),
    termsAndConditionsAccepted: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  const [activeTab, setActiveTab] = useState("personal");

  const initialValues = {
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    avatarType: "realistic",
    measurementUnit: "metric",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    profileImageURL: "",
    newsletterSubscription: false,
    termsAndConditionsAccepted: false,
  };

  const inputFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      tab: "personal",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      tab: "personal",
    },
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      tab: "personal",
    },
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      tab: "personal",
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      tab: "personal",
    },
    {
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      tab: "personal",
    },
    {
      name: "height",
      type: "number",
      placeholder: "Height (cm)",
      tab: "measurements",
    },
    {
      name: "weight",
      type: "number",
      placeholder: "Weight (kg)",
      tab: "measurements",
    },
    {
      name: "chest",
      type: "number",
      placeholder: "Chest (cm)",
      tab: "measurements",
    },
    {
      name: "waist",
      type: "number",
      placeholder: "Waist (cm)",
      tab: "measurements",
    },
    {
      name: "hips",
      type: "number",
      placeholder: "Hips (cm)",
      tab: "measurements",
    },
    {
      name: "profileImageURL",
      type: "url",
      placeholder: "Profile Image URL",
      tab: "preferences",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-400 to-sky-200">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[40px] w-[40px] rounded-full bg-white opacity-20 blur-xl"></div>
        <div className="absolute right-[15%] top-[30%] h-[80px] w-[80px] rounded-full bg-white opacity-20 blur-xl"></div>
        <div className="absolute left-[20%] bottom-[20%] h-[60px] w-[60px] rounded-full bg-white opacity-20 blur-xl"></div>
        <div className="absolute right-[25%] bottom-[10%] h-[50px] w-[50px] rounded-full bg-white opacity-20 blur-xl"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full m-4 relative z-10"
      >
        <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center text-sky-700">
              Register for Glamorize
            </CardTitle>
            <CardDescription className="text-center text-sky-600">
              Join our community and elevate your style to new heights!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log("Form Values", values);
                  alert("Registration successful!");
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ errors, touched, isSubmitting, setFieldValue }) => (
                <Form>
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-3 bg-sky-100">
                      <TabsTrigger
                        value="personal"
                        className="data-[state=active]:bg-white"
                      >
                        Personal Info
                      </TabsTrigger>
                      <TabsTrigger
                        value="measurements"
                        className="data-[state=active]:bg-white"
                      >
                        Measurements
                      </TabsTrigger>
                      <TabsTrigger
                        value="preferences"
                        className="data-[state=active]:bg-white"
                      >
                        Preferences
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="personal">
                      <div className="space-y-4">
                        {inputFields
                          .filter((field) => field.tab === "personal")
                          .map((field) => (
                            <div key={field.name}>
                              <Label
                                htmlFor={field.name}
                                className="text-sky-700"
                              >
                                {field.placeholder}
                              </Label>
                              <Field name={field.name}>
                                {({ field }) => (
                                  <Input
                                    {...field}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className={`bg-sky-50 border-sky-200 focus:border-sky-500 ${
                                      touched[field.name] && errors[field.name]
                                        ? "border-red-500"
                                        : ""
                                    }`}
                                  />
                                )}
                              </Field>
                              {touched[field.name] && errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors[field.name]}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="measurements">
                      <div className="space-y-4">
                        {inputFields
                          .filter((field) => field.tab === "measurements")
                          .map((field) => (
                            <div key={field.name}>
                              <Label
                                htmlFor={field.name}
                                className="text-sky-700"
                              >
                                {field.placeholder}
                              </Label>
                              <Field name={field.name}>
                                {({ field }) => (
                                  <Input
                                    {...field}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className={`bg-sky-50 border-sky-200 focus:border-sky-500 ${
                                      touched[field.name] && errors[field.name]
                                        ? "border-red-500"
                                        : ""
                                    }`}
                                  />
                                )}
                              </Field>
                              {touched[field.name] && errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors[field.name]}
                                </p>
                              )}
                            </div>
                          ))}
                        <div>
                          <Label
                            htmlFor="measurementUnit"
                            className="text-sky-700"
                          >
                            Measurement Unit
                          </Label>
                          <Select
                            name="measurementUnit"
                            onValueChange={(value) =>
                              setFieldValue("measurementUnit", value)
                            }
                          >
                            <SelectTrigger className="bg-sky-50 border-sky-200">
                              <SelectValue placeholder="Select measurement unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="metric">Metric</SelectItem>
                              <SelectItem value="imperial">Imperial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="preferences">
                      <div className="space-y-4">
                        {inputFields
                          .filter((field) => field.tab === "preferences")
                          .map((field) => (
                            <div key={field.name}>
                              <Label
                                htmlFor={field.name}
                                className="text-sky-700"
                              >
                                {field.placeholder}
                              </Label>
                              <Field name={field.name}>
                                {({ field }) => (
                                  <Input
                                    {...field}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className={`bg-sky-50 border-sky-200 focus:border-sky-500 ${
                                      touched[field.name] && errors[field.name]
                                        ? "border-red-500"
                                        : ""
                                    }`}
                                  />
                                )}
                              </Field>
                              {touched[field.name] && errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors[field.name]}
                                </p>
                              )}
                            </div>
                          ))}
                        <div>
                          <Label htmlFor="avatarType" className="text-sky-700">
                            Avatar Type
                          </Label>
                          <Select
                            name="avatarType"
                            onValueChange={(value) =>
                              setFieldValue("avatarType", value)
                            }
                          >
                            <SelectTrigger className="bg-sky-50 border-sky-200">
                              <SelectValue placeholder="Select avatar type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="realistic">
                                Realistic
                              </SelectItem>
                              <SelectItem value="cartoonish">
                                Cartoonish
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Field name="newsletterSubscription">
                            {({ field }) => (
                              <Checkbox
                                id="newsletterSubscription"
                                checked={field.value}
                                onCheckedChange={(checked) =>
                                  setFieldValue(
                                    "newsletterSubscription",
                                    checked
                                  )
                                }
                              />
                            )}
                          </Field>
                          <label
                            htmlFor="newsletterSubscription"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sky-700"
                          >
                            Subscribe to Newsletter
                          </label>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Field name="termsAndConditionsAccepted">
                        {({ field }) => (
                          <Checkbox
                            id="termsAndConditionsAccepted"
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              setFieldValue(
                                "termsAndConditionsAccepted",
                                checked
                              )
                            }
                          />
                        )}
                      </Field>
                      <label
                        htmlFor="termsAndConditionsAccepted"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sky-700"
                      >
                        I accept the terms and conditions
                      </label>
                    </div>
                    {touched.termsAndConditionsAccepted &&
                      errors.termsAndConditionsAccepted && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.termsAndConditionsAccepted}
                        </p>
                      )}

                    <Button
                      type="submit"
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Registering..." : "Register"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;
