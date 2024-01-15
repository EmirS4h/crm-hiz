"use client";
import React from "react";
import { Formik, useFormik } from "formik";

function Contact() {
  const formik = useFormik({
    initialValues: {
      nameSurname: "",
      email: "",
      phoneNumber: "",
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-11/12 lg:w-1/2 min-h-screen flex justify-center items-center mx-auto shadow-lg rounded-lg mt-5 p-2">
      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-y-10">
        <h2 className="font-bold text-3xl leading-7 mb-3 mt-2">İletişim Formu</h2>
        <div className="flex flex-col gap-y-3">
          <label
            htmlFor="nameSurname"
            className="text-2xl font-semibold tracking-wider self-start"
          >
            İsim Soyisim*
          </label>
          <input
            type="text"
            name="nameSurname"
            id="nameSurname"
            onChange={formik.handleChange}
            value={formik.values.nameSurname}
            className="border-2 px-2 rounded-md"
            placeholder="isim / soyisim"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <label
            htmlFor="email"
            className="text-2xl font-semibold tracking-wider self-start"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border-2 px-2 rounded-md"
            placeholder="örnekmail@mail.com"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <label
            htmlFor="phoneNumber"
            className="text-2xl font-semibold tracking-wider self-start"
          >
            Telefon Numarası*
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className="border-2 px-2 rounded-md"
            placeholder="555-555-55-55"
          />
        </div>

        <div className="flex flex-col gap-y-3">
          <label
            htmlFor="packet"
            className="text-2xl font-semibold tracking-wider self-start"
          >
            Paket Seçiniz*
          </label>
          <select
            name="packet"
            id="packet"
            className="border-2 rounded-md px-2"
          >
            <option value="Temel Paket">Temel Paket</option>
            <option value="Avantaj Paket">Avantaj Paket</option>
            <option value="Mega Paket">Mega Paket</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-3">
          <label
            htmlFor="notes"
            className="text-2xl font-semibold tracking-wider self-start"
          >
            Varsa Notunuz
          </label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            className="border-2 rounded-md px-2"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          GONDER
        </button>
      </form>
    </div>
  );
}

export default Contact;
