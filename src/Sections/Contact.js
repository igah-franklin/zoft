import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

const initialstate = Object.freeze({
  name: "",
  phone: "",
  email: "",
  ui: "",
  python: "",
  javascript: "",
  frontend: "",
  backend: "",
  fullstack: "",
  others_: "",
  message: "",
});

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.string(),
//   email: yup.string().email().required(),
//   ui_ux: yup.string(),
//   python: yup.string(),
//   javascript: yup.string(),
//   front_end: yup.string(),
//   back_end: yup.string(),
//   full_stack: yup.string(),
//   others: yup.string(),
//   text_msg: yup.string(),
// });

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  //   watch,
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const [formData, setFormdata] = useState(initialstate);

  const getData = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  function resetInputs() {
    const inputs = document.querySelectorAll("input");
    const text = document.querySelector("textarea");
    text.value = "";
    const inputCheckbox = document.querySelectorAll("input[type='checkbox']");
    inputs.forEach((input) => (input.value = ""));
    [...inputCheckbox].forEach((inputs) => console.log(inputs.textContent));
    console.log(inputCheckbox);
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    await axios
      .post("https://zoft-contact-api.herokuapp.com/api/", {
        name: formData.name,
        number: formData.phone,
        email: formData.email,
        ui_ux: formData.ui,
        python: formData.python,
        javascript: formData.javascript,
        front_end: formData.frontend,
        back_end: formData.backend,
        full_stack: formData.fullstack,
        others: formData.others_,
        text_msg: formData.message,
      })
      .then((res) => {
        console.log(res.data);
        resetInputs();
        //reset();
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  {/* <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  /> */}
                  <img
                    className="h-10 w-10 rounded-full"
                    src={require("../assets/png/zoft-avatar.png")}
                    alt="zoft user avatar"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <span>Hello,</span>{" "}
                    <span className="text-bold">{res.data.name}</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    your submission has been received, <br></br>thank you!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      });
  };

  return (
    <section className="bg-form">
      <div className="App">
        <Toaster />
      </div>
      <div className="flex flex-col-reverse lg:w-[90vw] lg:m-auto lg:flex-row items-center pt-10 pb-10">
        <div className="form-div w-full lg:w-2/3 lg:m-auto border-t lg:border-0">
          <h1 className="w-2/3 text-white text-xl px-4 py-7 lg:px-12 mt-3">
            -Provide us with information on what you'll love to learn -
          </h1>
          <form onSubmit={formSubmit}>
            <div className="form-control px-4 lg:px-12 mt-3">
              <input
                className="w-full text-white bg-form border border-header rounded p-5 lg:pt-7 outline-0 hover:outline-white"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                onChange={getData}
              />
            </div>
            <div className="form-control px-4 lg:px-12 mt-3">
              <input
                className="w-full text-white bg-form border border-header rounded p-5 lg:pt-7 outline-0 hover:outline-white"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                onChange={getData}
              />
            </div>
            <div className="form-control px-4 lg:px-12 mt-3">
              <input
                className="w-full text-white bg-form border border-header rounded p-5 lg:pt-7 outline-0 hover:outline-white"
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
                onChange={getData}
              />
            </div>

            <div className="form-control px-4 lg:px-12 mt-3">
              <ul class="ks-cboxtags">
                <li>
                  <input
                    type="checkbox"
                    id="checkboxEight"
                    value="ui"
                    name="ui"
                    onChange={getData}
                  />
                  <label for="checkboxEight">Learn UI/UX</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxNine"
                    value="Python"
                    name="python"
                    onChange={getData}
                  />
                  <label for="checkboxNine">Python</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxTen"
                    value="javascript"
                    name="javascript"
                    onChange={getData}
                  />
                  <label for="checkboxTen">Javascript</label>
                </li>
                <li class="ks-selected">
                  <input
                    type="checkbox"
                    id="checkboxEleven"
                    value="frontend"
                    name="frontend"
                    onChange={getData}
                  />
                  <label for="checkboxEleven">Front End Dev</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxTwelve"
                    value="backend"
                    name="backend"
                    onChange={getData}
                  />
                  <label for="checkboxTwelve">Back End Dev</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxThirteen"
                    value="fullstack"
                    name="fullstack"
                    onChange={getData}
                  />
                  <label for="checkboxThirteen">Full Stack Web Dev</label>
                </li>
                {/* <li>
                                    <input type="checkbox" id="checkboxFourteen" value="branding" name="branding_"/>
                                    <label for="checkboxFourteen">Branding</label>
                                </li> */}
                <li>
                  <input
                    type="checkbox"
                    id="checkboxFifteen"
                    value="Others_"
                    name="others_"
                    onChange={getData}
                  />
                  <label for="checkboxFifteen">Others</label>
                </li>
              </ul>
            </div>

            <div className="form-control px-4 lg:px-12 mt-3">
              <textarea
                cols="40"
                rows="6"
                placeholder="write your message here (optional)"
                className="w-full outline-0 rounded border border-header bg-form p-5 focus:text-white"
                name="message"
                onChange={getData}
              ></textarea>
            </div>

            <div className="form-control px-4 lg:px-12 mt-8">
              <button className="bg-header  px-5 py-4 text-white hover:bg-black hover:text-white rounded min-w-[150px]">
                Submit entry
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/3">
          <img src={require("../assets/png/contact-us.png")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
