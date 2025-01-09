"use client";

import { useState } from "react";
import { updateProfile } from "../_lib/actions";
import { useFormStatus } from "react-dom";

function UpdateProfileForm({ children, guest }) {
  const { full_name, email, phone } = guest;

  return (
    <form
      action={updateProfile}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col rounded-lg"
    >
      <div className="space-y-2">
        <p className="text-lg mb-8 text-center  text-primary-200">
          Providing the following information will make your booking process
          faster and smoother. See you soon!
        </p>
        <label className="text-accent-700">Full name</label>
        <input
          name="name"
          defaultValue={full_name}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-accent-700">Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-accent-700" htmlFor="Phone">
          Phone number
        </label>
        <input
          name="phone"
          defaultValue={phone}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}
function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-700 px-8 py-4 text-primary-700 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 rounded-md"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}
export default UpdateProfileForm;
