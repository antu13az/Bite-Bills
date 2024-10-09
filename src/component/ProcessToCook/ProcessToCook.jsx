import PropTypes from "prop-types";

const ProcessToCook = ({ toCook,cookingTime,foodCalories }) => {
  return (
    <>
      <h1 className="text-[#150b2b] text-[24px] font-bold text-center mb-2">
        Currently Cooking:{toCook.length}
      </h1>
      <div className="flex justify-between ">
        <p className="font-[700]">No</p>
        <p className="font-[700]">Recipe Name</p>
        <p className="font-[700]">Preparing Time</p>
        <p className="font-[700]">Calories</p>
      </div>
      {toCook.map((food, idx) => (
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
        </div>
        
      ))}
<div className="text-center py-[15px] bg-slate-200 rounded-md">
    <h2 className="font-bold text-md">Time + Calories</h2>
   <p className="bg-white my-1"> Total Times: <span className="text-xl">{cookingTime}</span></p>
   <p className="bg-white my-1"> Total Calories:<span className="text-xl">{foodCalories}</span></p>
</div>
    </>
  );
};
ProcessToCook.propTypes = {
  toCook: PropTypes.array.isRequired,
  cookingTime: PropTypes.number.isRequired,
  foodCalories: PropTypes.number.isRequired,
  // addToPreparing: PropTypes.func.isRequired,
};
export default ProcessToCook;
