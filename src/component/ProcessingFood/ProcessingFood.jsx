import PropTypes from "prop-types";
import ProcessToCook from "../ProcessToCook/ProcessToCook";
import { useState } from "react";
import toast from "react-hot-toast";

const ProcessingFood = ({ preparing }) => {
  const [toCook, setToCook] = useState([]);
  const [cookingTime, setCookingTime] = useState(0);
  const [foodCalories, setFoodCalories] = useState(0);

  const handleToCook = (foodToCook) => {
    const alreadyCook = toCook.find(
      (cookItem) => cookItem.recipe_id === foodToCook.recipe_id
    );

    if (alreadyCook) {
      toast("We are processing your items!", {
        icon: "😊",
      });
    } else {
      setToCook([...toCook, foodToCook]);
      setCookingTime(cookingTime + foodToCook.preparing_time);
      setFoodCalories(foodCalories + foodToCook.calories);
    }
  };

  return (
    <>
      <h1 className="text-[#150b2b] text-[24px] font-bold text text-center mb-2">
        Went to Cook:{preparing.length}
      </h1>
      <div className="flex justify-between ">
        <p className="font-[700]">No</p>
        <p className="font-[700]">Recipe Name</p>
        <p className="font-[700]">Preparing Time</p>
        <p className="font-[700]">Calories</p>
      </div>

      {preparing.map((food, idx) => (
        <div
          key={idx}
          className="py-[20px] rounded-lg bg-white px-[8px] border-2 my-[15px] shadow-xl"
        >
          <div className="flex justify-between gap-2">
            <span className="w-[25px] h-[25px] rounded-[13px] text-center font-[700] bg-[#ddd9d9cf]">
              {idx + 1}.
            </span>
            <span>{food.recipe_name}</span>
            <span>{food.preparing_time} minutes</span>
            <span>{food.calories} calories</span>
          </div>
          <div className="flex justify-end mt-[12px]">
            
            <button
              onClick={() => handleToCook(food)}
              className="text-black font-bold border px-[10px] py-[5px] rounded-full bg-[#0be58a] "
            >
              Process
            </button>
          </div>
        </div>
      ))}
      <ProcessToCook
        toCook={toCook}
        foodCalories={foodCalories}
        cookingTime={cookingTime}
      />
    </>
  );
};
ProcessingFood.propTypes = {
  preparing: PropTypes.array.isRequired,
  // addToPreparing: PropTypes.func.isRequired,
};
export default ProcessingFood;
