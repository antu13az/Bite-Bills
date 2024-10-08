import PropTypes from "prop-types";
import { FaGripfire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Recipe = ({ recipe }) => {
  const {
    // recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div>
        <img src={recipe_image} alt="" />
        <h2>{recipe_name}</h2>
        <p>{short_description}</p>
      </div>
      <div>
        <h2>Ingredients: {ingredients.length}</h2>
        {ingredients.map((ingredient, idx) => (
          <div key={idx}>
            <span>{ingredient}</span>
          </div>
        ))}
        <div>
          <IoMdTime />
          <span>{preparing_time}</span>
          <FaGripfire /> <span>{calories}</span>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
