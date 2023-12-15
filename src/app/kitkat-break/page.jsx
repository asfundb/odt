"use client";
import React, { useState, useEffect, useRef } from "react";

import { ThumbsUp, ThumbsDown, SpeakerHigh } from "@phosphor-icons/react";
import { Toaster } from "react-hot-toast";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function KitkatBreak() {
  const videoRef = useRef();
  const [adRating, setAdRating] = useState(2);
  const [musicRating, setMusicRating] = useState(2);
  const [adRatingCompleted, setAdRatingComplete] = useState(false);
  const [musicRatingCompleted, setMusicRatingComplete] = useState(false);
  const { width, height } = useWindowSize();
  const [opacity, setOpacity] = useState("100%");

  // mobile
  const [mobileAdRating, setMobileAdRating] = useState(4);
  const [mobileMusicRating, setMobileMusicRating] = useState(4);

  console.log("adRating", adRating);
  console.log("musicRating", musicRating);

  const unmute = () => {
    if (!videoRef) {
      return;
    }
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleAdRating = (value) => {
    setAdRating(value);
    setAdRatingComplete(true);
  };

  const handleMusicRating = (value) => {
    setMusicRating(value);
    setMusicRatingComplete(true);
    setOpacity("30%");
  };
  const handleMobileAdRating = (value) => {
    setMobileAdRating(value);
    setAdRatingComplete(true);
  };

  const handleMobileMusicRating = (value) => {
    setMobileMusicRating(value);
    setMusicRatingComplete(true);
    setOpacity("30%");
  };

  return (
    <div className="w-screen h-screen kbreak bg-slate-100">
      {musicRatingCompleted && adRatingCompleted && (
        <Confetti width={width} height={height} className="opacity-[60%]" />
      )}
      <div className="w-scren h-screen">
        <div className="fixed right-12 top-10 z-[999]">
          <button
            className="btn bg-black hover:bg-green-500 border-0 rounded-full w-[50px] h-[50px] text-white"
            onClick={unmute}
          >
            <SpeakerHigh size={32} />
          </button>
        </div>
        <video
          className={musicRatingCompleted ? "opacity-[30%]" : ""}
          autoPlay
          muted
          loop
          ref={videoRef}
        >
          <source src={"video/Kitkat-break-ad.mp4"} type="video/mp4" />
        </video>
        <div className="flex flex-col items-center gap-4 py-8 lg:fixed lg:bottom-0 w-screen">
          <div className="lg:hidden flex flex-col gap-8 items-center w-[400px] bg-white py-8 rounded-2xl">
            {" "}
            <div
              id="adRating"
              className="flex justify-center flex-col items-center gap-2"
            >
              <div className="text-black">Rate the Advertisement</div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((adValue) => (
                  <input
                    key={adValue}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-green-500"
                    checked={adRating === adValue}
                    value={adValue}
                    onChange={() => handleAdRating(adValue)}
                    id={`ad-rating-${adRating}`}
                  />
                ))}
              </div>
            </div>
            <div
              id="music-rating"
              className="flex justify-center flex-col items-center gap-2"
            >
              <div className="text-black">Rate the Music</div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((musicValue) => (
                  <input
                    key={musicValue}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star bg-orange-500"
                    checked={musicRating === musicValue}
                    value={musicValue}
                    onChange={() => handleMusicRating(musicValue)}
                    id={`music-rating-${musicRating}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden w-[400px] bg-white rounded-2xl lg:flex justify-center flex-col items-center gap-2 py-4 ">
            {!adRatingCompleted ? (
              <div
                id="adRating"
                className="flex justify-center flex-col items-center gap-2"
              >
                <div className="text-black">Rate the Advertisement</div>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((adValue) => (
                    <input
                      key={adValue}
                      type="radio"
                      name="rating-3"
                      className="mask mask-star bg-green-500"
                      checked={adRating === adValue}
                      value={adValue}
                      onChange={() => handleAdRating(adValue)}
                      id={`ad-rating-${adRating}`}
                    />
                  ))}
                </div>
              </div>
            ) : adRatingCompleted && !musicRatingCompleted ? (
              <div
                id="music-rating"
                className="flex justify-center flex-col items-center gap-2"
              >
                <div className="text-black">Rate the Music</div>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((musicValue) => (
                    <input
                      key={musicValue}
                      type="radio"
                      name="rating-4"
                      className="mask mask-star bg-orange-500"
                      checked={musicRating === musicValue}
                      value={musicValue}
                      onChange={() => handleMusicRating(musicValue)}
                      id={`music-rating-${musicRating}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-center flex-col items-center gap-2">
                All done
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
