import React from 'react'
import API from "../API";
import { useSelector ,useDispatch} from "react-redux";


const Header = () => {
  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });

  return (
    <div className="text-[#667079] flex justify-between w-[100%] bg-white p-2 rounded-md text-lg font-bold">
        <div className="Right ">
            Question 
        </div>

        <div className="Left">
            <span>{+Stats.Value+1}</span>
            <span>/</span>
            <span>{API.length}</span>
        </div>
    </div>
  )
}

export default Header