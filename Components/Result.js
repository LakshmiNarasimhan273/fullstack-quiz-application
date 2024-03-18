import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../API";
import { useDispatch } from "react-redux";
import { ShowResult } from "../Reducer/Actions";

const Result = ({ username }) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState(null);

  const stats = useSelector((state) => state.Reducer);

  useEffect(() => {
    const userArray = stats.UserArray;
    let correctAnswers = 0;

    API.forEach((question, index) => {
      if (question.Answer === userArray[index]) {
        correctAnswers++;
      }
    });

    setResult(correctAnswers);
  }, [stats.UserArray]);
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-4">
        <p className="text-3xl font-bold text-Black-500">{capitalizeFirstLetter(username)}</p>
      </div>

      <div className="bg-gray-200 text-white p-6 space-x-5 flex justify-between items-center rounded-lg mb-6 w-full">
        <p className="text-4xl">Result {Math.floor((result / API.length) * 100)}%</p>
        <div className="bg-gold-400 rounded-full h-20 w-20 flex justify-center items-center overflow-hidden">
          <p
            style={{
              background: `conic-gradient(#8B4513 0 ${(result / API.length) * 100}%, transparent 0 0%)`,
            }}
            className="w-full h-full flex items-center justify-center"
          ></p>
        </div>
      </div>

      <div className="bg-gray-400 text-white p-6 flex justify-between text-center rounded-lg mb-6 w-full">
        <div>
          <p className="text-lg">Total</p>
          <p className="text-4xl">{API.length}</p>
        </div>
        <div>
          <p className="text-lg ">Correct</p>
          <p className="text-4xl text-green-600">{result}</p>
        </div>
        <div>
          <p className="text-lg">Wrong</p>
          <p className="text-4xl  text-red-700">{API.length - result}</p>
        </div>
      </div>

      <div className="bg-gray-500 text-white p-6 sm:max-h-[40vh] overflow-scroll w-full">
        {API.map((Elem, Ind) => (
          <div key={Ind} className="mb-6">
            <p className="text-2xl font-semibold">Question # {Ind + 1}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-700 text-white p-4 rounded">
                <p className="text-2xl">Ans: {Elem.Options[Elem.Answer]}</p>
              </div>
              {/* Add more options if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
