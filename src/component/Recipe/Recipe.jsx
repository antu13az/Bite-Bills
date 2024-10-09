import PropTypes from "prop-types";
import { FaGripfire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { TiStarburstOutline } from "react-icons/ti";

const Recipe = ({ recipe,addToPreparing }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="border p-6 rounded-lg shadow-xl ">
      <div>
        <img className="rounded-lg" src={recipe_image} alt="" />
        <h2 className="text-[20px] font-[900] pt-4 ">{recipe_name}</h2>
        <p className="font-[500]">{short_description}</p>
      </div>
      <div>
        <div className="py-[15px] ">
          <h2 className="text-[20px] font-[700] mb-[8px]">
            Ingredients: {ingredients.length}
          </h2>
          {ingredients.map((ingredient, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <TiStarburstOutline />
              <span>{ingredient}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center pt-[10px] border-t-2">
          <div className="flex items-center mr-[80px] gap-2">
            <IoMdTime /> <p>{preparing_time} minutes</p>
          </div>
          <div className="flex items-center gap-2">
            <FaGripfire /> <p> {calories} calories</p>
          </div>
        </div>
      </div>
      <button onClick={()=> addToPreparing(recipe,recipe_id)} className="bg-[#0be58a] py-[8px] px-[30px] text-[18px] font-bold rounded-full mt-[20px] text-indigo-950 ">Want to Cook</button>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  addToPreparing: PropTypes.func.isRequired,
};

export default Recipe;
