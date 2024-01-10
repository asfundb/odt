"use client";
import React, { useState, useEffect } from "react";
import kitkatBall from "@/data/en/kitkat";
import Image from "next/image";
import banner from "../../../public/kitkat-banner-new.svg";
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import replaceSpacesWithHyphens from "@/utils/stringParser";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import toast, { Toaster } from "react-hot-toast";

const mailerlite = new MailerLite({
  api_key: process.env.NEXT_PUBLIC_MAILER_LITE_API_KEY,
});

export default function Stouffers() {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [priceType, setPriceType] = useState("price_a");
  const [email, setEmail] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const addSubscriber = (e) => {
    e.preventDefault();
    const params = {
      email: email,
      groups: ["106907855697740829"], // KK Group ID
      status: "active",
    };

    mailerlite.subscribers
      .createOrUpdate(params)
      .then((response) => {
        setEmail("");
        toast.success("You're all signed up");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Try again");
        }
      });
  };

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
                className="hidden md:block rounded-t-2xl md:hover:scale-125 md:hover:translate-y-5 transition duration-500 cursor-pointer object-cover"
              />
              <Image
                src={meal.mob_img}
                alt={meal.name}
                className="block md:hidden rounded-t-2xl md:hover:scale-125 md:hover:translate-y-5 transition duration-500 cursor-pointer object-cover"
              />
              <div className="flex justify-between items-center h-[50px] mx-4 text-xs md:text-sm">
                <h2 className="text-center text-xs  md:text-sm truncate ">
                  {meal.name}
                </h2>
                <button
                  className="w-[25px] h-[25px] rounded-full border-black border hover:text-white hover:bg-black cursor-pointer"
                  onClick={(e) => openModal(meal, e)}
                  id={`K-${replaceSpacesWithHyphens(meal.name)}-more-info`}
                >
                  i
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full items-center flex flex-col mt-20 bg-sky-100 py-20 gap-4 px-8">
        <p className="font-bold text-black">
          You will be invited to taste {selectedMeals.length}{" "}
          {selectedMeals.length == 1 ? "product" : "products"}!
        </p>
        <form
          action="submit"
          className=" flex justify-center w-full"
          onSubmit={addSubscriber}
        >
          <input
            type="email"
            className="border rounded-l-full  w-[80%] lg:w-[25%] h-[50px] indent-4 border-r-0 text-black"
            placeholder="Enter Email"
            onChange={updateEmail}
            value={email}
          />{" "}
          <button className="btn text-white rounded-r-full border-l-0 bg-black">
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
            <Image
              src={currentMeal?.img}
              alt=""
              className="hidden md:block w-[50%] rounded"
            />
            <Image
              src={currentMeal?.mob_img}
              alt=""
              className="md:hidden w-[50%] rounded"
            />
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
            <p className="text-sm">Is this price reasonable?</p>
            <div className="flex justify-center gap-4">
              <button
                className={`border rounded-full p-4 hover:cursor-pointer ${
                  feedback[currentMeal?.name] === "dislike"
                    ? "bg-red-500 text-white"
                    : ""
                }`}
                onClick={(e) => handleFeedback(currentMeal, "dislike")}
                id={`K-${replaceSpacesWithHyphens(
                  currentMeal?.name
                )}-${priceType}-disliked`}
              >
                <ThumbsDown width={25} height={25} />
              </button>
              <button
                className={`border rounded-full p-4 hover:cursor-pointer ${
                  feedback[currentMeal?.name] === "like"
                    ? "bg-green-500 text-white"
                    : ""
                }`}
                onClick={(e) => handleFeedback(currentMeal, "like")}
                id={`K-${replaceSpacesWithHyphens(
                  currentMeal?.name
                )}-${priceType}-liked`}
              >
                x§x
                <ThumbsUp width={25} height={25} />
              </button>
            </div>
          </div>
        </div>
      </dialog>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
