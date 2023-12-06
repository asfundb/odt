"use client";
import React, { useState, useEffect } from "react";
import kitkatBall from "@/data/kitkat";
import Image from "next/image";
import banner from "../../../public/kitkat-banner.svg";
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import priceSelector from "@/utils/priceSelector";

export default function Stouffers() {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [priceType, setPriceType] = useState("price_a");

  useEffect(() => {
    setPriceType(Math.random() < 0.5 ? "price_a" : "price_b");
  }, []);

  const handleFeedback = (meal, type) => {
    setFeedback({ ...feedback, [meal.name]: type });
  };

  const addToSelectList = (index) => {
    setSelectedMeals((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((mealIndex) => mealIndex !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const openModal = (meal, event) => {
    event.stopPropagation();
    setCurrentMeal(meal);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className="w-screen h-full">
      <div className="">
        <Image src={banner} alt="" className="w-screen " />
      </div>
      <div className=" mx-10 lg:mx-48 my-16 text-black flex flex-col items-center ">
        <div className="badge bg-sky-400 border-none badge-lg lg:py-4 text-white mb-8 text-xs md:text-base mx-8 text-center py-6">
          Select the flavours you would like to be invited to taste by clicking
          the card
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {kitkatBall.map((meal, index) => (
            <div
              key={index}
              className={`card border w-300 cursor-pointer overflow-hidden ${
                selectedMeals.includes(index) ? "border-green-500" : ""
              }`}
              onClick={() => addToSelectList(index)}
            >
              <Image
                src={meal.img}
                alt={meal.name}
                className="rounded-t-2xl md:hover:scale-125 md:hover:translate-y-5 transition duration-500 cursor-pointer object-cover"
              />
              <div className="flex justify-between items-center h-[50px] mx-4 text-xs md:text-sm">
                <h2 className="text-center text-sm">{meal.name}</h2>

                <button
                  className="w-[25px] h-[25px] rounded-full border-black border hover:text-white hover:bg-black cursor-pointer"
                  onClick={(e) => openModal(meal, e)}
                >
                  i
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full items-center flex flex-col mt-20 bg-sky-100 py-20 gap-4">
        <p className="font-bold text-black">
          You will be invited to taste {selectedMeals.length}{" "}
          {selectedMeals.length == 1 ? "product" : "products"}!
        </p>
        <form action="submit" className=" flex justify-center w-full">
          <input
            type="email"
            className="border rounded-l-full  w-[80%] lg:w-[25%] h-[50px] indent-4 border-r-0"
            placeholder="Enter Email"
          />{" "}
          <button className="btn text-white rounded-r-full border-l-0">
            Submit
          </button>
        </form>
      </div>

      {/* Modal for displaying meal details */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setCurrentMeal(null)}
            >
              ✕
            </button>
          </form>
          <div className="flex items-center flex-col gap-3 mt-4">
            <Image src={currentMeal?.img} alt="" className="w-[50%] rounded" />
            <h3 className="font-medium uppercase text-slate-600 text-sm mb-0 mt-4">
              {currentMeal ? currentMeal.brand : ""}
            </h3>
            <h3 className="font-bold text-lg mt-0">
              {currentMeal ? currentMeal.name : ""}
            </h3>
            {currentMeal && (
              <>
                <div className="badge badge-accent text-white">
                  {currentMeal[priceType]} Dhs
                </div>
                <p className="py-4 text-sm border-t border-slate-100 pl-2">
                  {currentMeal.product_description}
                  <br />
                </p>
              </>
            )}
          </div>
          <div className="flex justify-center flex-col items-center gap-4 border-t border-slate-100 pt-4">
            <p className="text-sm">How is the price?</p>
            <div className="flex justify-center gap-4">
              <button
                className={`border rounded-full p-4 hover:cursor-pointer ${
                  feedback[currentMeal?.name] === "dislike"
                    ? "bg-red-500 text-white"
                    : ""
                }`}
                onClick={() => handleFeedback(currentMeal, "dislike")}
              >
                <ThumbsDown width={25} height={25} />
              </button>
              <button
                className={`border rounded-full p-4 hover:cursor-pointer ${
                  feedback[currentMeal?.name] === "like"
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={() => handleFeedback(currentMeal, "like")}
              >
                <ThumbsUp width={25} height={25} />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
