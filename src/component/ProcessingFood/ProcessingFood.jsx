import PropTypes from "prop-types";


const ProcessingFood = ({ preparing }) => {
    
  return (
    <>
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
          <div className="flex justify-between ">
            <span className="w-[25px] h-[25px] rounded-[13px] text-center font-[700] bg-[#ddd9d9cf]">
              {idx + 1}.
            </span>
            <span>{food.recipe_name}</span>
            <span>{food.preparing_time}</span>
            <span>{food.calories}</span>
          </div>
          <div className="flex justify-end mt-[12px]">
            <button className="text-black font-bold border px-[10px] py-[5px] rounded-full bg-[#0be58a] ">
              Processing
            </button>
          </div>
        </div>
      ))}
    
    </>
  );
};
ProcessingFood.propTypes = {
  preparing: PropTypes.array.isRequired,
  // addToPreparing: PropTypes.func.isRequired,
};
export default ProcessingFood;
