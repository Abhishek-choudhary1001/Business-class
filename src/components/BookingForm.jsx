import React, { useState } from "react";
import { CalendarDays } from "lucide-react"; // npm i lucide-react

export default function BookingForm() {
  const [tab, setTab] = useState("round");

  const tabClass = (name) =>
    `px-5 py-2 text-sm font-semibold rounded-md transition
     ${tab === name ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-700"}`;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl mx-auto">
      
      {/* FIXED TABS (no movement) */}
      <div className="flex gap-3 mb-6">
        <button onClick={() => setTab("round")} className={tabClass("round")}>
          Round Trip
        </button>
        <button onClick={() => setTab("one")} className={tabClass("one")}>
          One Way
        </button>
        <button onClick={() => setTab("multi")} className={tabClass("multi")}>
          Multi City
        </button>
      </div>

      {/* FORM BODY */}
      <div className="transition-all duration-300">

        {/* ROUND TRIP → 2–2 GRID */}
        {tab === "round" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="From" />
            <input className="input" placeholder="To" />
            

            <div className="relative bg-white border border-gray-300 rounded-md h-[48px] flex items-center px-3 overflow-hidden">
  
  {/* Fake Placeholder */}
  <span className="absolute left-3 text-gray-500 text-sm pointer-events-none">
    Depart
  </span>

  {/* Custom Calendar Icon */}
  <CalendarDays
    size={18}
    className="absolute right-3 text-gray-400 pointer-events-none"
  />

  {/* Real Date Input */}
  <input
    type="date"
    className="
      absolute inset-0
      w-full h-full
      bg-transparent
      text-transparent
      caret-transparent
      appearance-none
      cursor-pointer
      z-10
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-calendar-picker-indicator]:absolute
      [&::-webkit-calendar-picker-indicator]:right-3
    "
  />
</div>

           
<div className="relative bg-white border border-gray-300 rounded-md h-[48px] flex items-center px-3 overflow-hidden">
  
  {/* Fake Placeholder */}
  <span className="absolute left-3 text-gray-500 text-sm pointer-events-none">
    Depart
  </span>

  {/* Custom Calendar Icon */}
  <CalendarDays
    size={18}
    className="absolute right-3 text-gray-400 pointer-events-none"
  />

  {/* Real Date Input */}
  <input
    type="date"
    className="
      absolute inset-0
      w-full h-full
      bg-transparent
      text-transparent
      caret-transparent
      appearance-none
      cursor-pointer
      z-10
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-calendar-picker-indicator]:absolute
      [&::-webkit-calendar-picker-indicator]:right-3
    "
  />
</div>

           

            <select className="input">
              <option>Business</option>
              <option>Economy</option>
              <option>First Class</option>
            </select>

            <select className="input">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
            </select>

            <button
  className="
    relative
    w-full
    overflow-hidden
    py-4
    rounded-xl
    font-semibold
    text-white
    bg-pink-600
    group
    transition-all
  "
>
  {/* Sliding background */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500
      translate-x-[-100%]
      group-hover:translate-x-0
      transition-transform duration-500 ease-out
    "
  />

  {/* Centered Text */}
  <span className="relative z-10 flex justify-center items-center w-full tracking-wide">
    Search Flights
  </span>
</button>

          </div>
        )}

        {/* ONE WAY → 2–2 GRID */}
        {tab === "one" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="From" />
            <input className="input" placeholder="To" />

            <div className="relative bg-white border border-gray-300 rounded-md h-[48px] flex items-center px-3 overflow-hidden">
  
  {/* Fake Placeholder */}
  <span className="absolute left-3 text-gray-500 text-sm pointer-events-none">
    Depart
  </span>

  {/* Custom Calendar Icon */}
  <CalendarDays
    size={18}
    className="absolute right-3 text-gray-400 pointer-events-none"
  />

  {/* Real Date Input */}
  <input
    type="date"
    className="
      absolute inset-0
      w-full h-full
      bg-transparent
      text-transparent
      caret-transparent
      appearance-none
      cursor-pointer
      z-10
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-calendar-picker-indicator]:absolute
      [&::-webkit-calendar-picker-indicator]:right-3
    "
  />
</div>

           
            <select className="input">
              <option>Business</option>
              <option>Economy</option>
              <option>First Class</option>
            </select>

            <select className="input md:col-span-2">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
            </select>

            <button
  className="
    relative
    w-full
    overflow-hidden
    py-4
    rounded-xl
    font-semibold
    text-white
    bg-pink-600
    group
    transition-all
  "
>
  {/* Sliding background */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500
      translate-x-[-100%]
      group-hover:translate-x-0
      transition-transform duration-500 ease-out
    "
  />

  {/* Centered Text */}
  <span className="relative z-10 flex justify-center items-center w-full tracking-wide">
    Search Flights
  </span>
</button>

          </div>
        )}

        {/* MULTI CITY → 3–3 GRID */}
        {tab === "multi" && (
          <div className="space-y-5">

            {/* Flights */}
            {[1, 2].map((i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="input" placeholder="From" />
                <input className="input" placeholder="To" />
                <div className="relative bg-white border border-gray-300 rounded-md h-[48px] flex items-center px-3 overflow-hidden">
  
  {/* Fake Placeholder */}
  <span className="absolute left-3 text-gray-500 text-sm pointer-events-none">
    Depart
  </span>

  {/* Custom Calendar Icon */}
  <CalendarDays
    size={18}
    className="absolute right-3 text-gray-400 pointer-events-none"
  />

  {/* Real Date Input */}
  <input
    type="date"
    className="
      absolute inset-0
      w-full h-full
      bg-transparent
      text-transparent
      caret-transparent
      appearance-none
      cursor-pointer
      z-10
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-calendar-picker-indicator]:absolute
      [&::-webkit-calendar-picker-indicator]:right-3
    "
  />
</div>

           
              </div>
            ))}

            {/* Passenger */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input className="input" placeholder="Your Name" />
              <input className="input" placeholder="Mobile No." />
              <input className="input" placeholder="Email" />
            </div>

            {/* Add Flight */}
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                +
              </span>
              Add a flight
            </button>

            {/* Bottom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="input">
                <option>Business</option>
                <option>Economy</option>
                <option>First Class</option>
              </select>

              <select className="input">
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
              </select>

              <button className="btn-primary">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
