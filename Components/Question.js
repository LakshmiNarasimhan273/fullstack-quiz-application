import React, { useEffect, useState } from "react";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec, UserSelecOption, ShowResult } from "../Reducer/Actions";

const Question = () => {
  let [State, setState] = useState(null);
  let [Index, setIndex] = useState(null);
  let [Res, setRes] = useState(null);

  let Dispatch = useDispatch();
  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });
  let StatsTwo = useSelector((Stat) => {
    return Stat.ReducerTwo;
  });

  useEffect(() => {
    if (Stats.UserArray[Stats.Value] != null) {
      setIndex(Stats.UserArray[Stats.Value]);
      setState(true);
    } else {
      setState(false);
      setIndex(null);
    }
  });

  return (
    <div>
      <div className="text-black font-bold p-6 my-4 bg-gray-300 rounded-md">
        <div className="Ask text-3xl mb-4">
          Question: {`${API[Stats.Value].Question} ? `}
        </div>

        <div className="Options">
          {API[Stats.Value].Options.map((Elem, Ind) => {
            return (
              <label
                key={Ind}
                onClick={() => {
                  Dispatch(UserSelecOption(Stats.Value, Ind));
                }}
                htmlFor={Ind}
                className="flex space-x-2 Blur my-3 p-4 rounded-md items-center text-lg"
              >
               <input
  type="radio"
  id={Ind}
  name={Stats.Value}
  value={Elem}
  className={`appearance-none bg-white h-6 w-6 rounded-full ${
    Index !== null && Index == Ind ? "bg-yellow-600" : ""
  }`}
/>
 <p>{Elem}</p>
              </label>
            );
          })}
        </div>
      </div>
      <div className="Buttons flex w-full justify-between space-x-4">
        <div
          onClick={() => {
            Dispatch(Dec());
          }}
          className="B1 bg-gray-500 w-1/2 p-4 rounded-md cursor-pointer text-center text-lg"
        >
          Previous
        </div>
        <div
          onClick={() => {
            Dispatch(Inc());
          }}
          className={`B2 ${
            Stats.Value !== API.length - 1
              ? "text-center block text-white  bg-blue-500 w-1/2 p-4 rounded-md cursor-pointer"
              : "hidden"
          }`}
        >
          Next
        </div>
        <div
          onClick={() => {
            Dispatch(ShowResult());
          }}
          className={`B3 ${
            Stats.Value === API.length - 1
              ? "block bg-green-500 text-white w-1/2 p-4 rounded-md cursor-pointer text-center"
              : "hidden"
          }`}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Question;
