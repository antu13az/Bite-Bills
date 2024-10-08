import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import ProcessingFood from "../ProcessingFood/ProcessingFood";
import toast from "react-hot-toast";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [preparing, setPreparing] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const addToPreparing = (food) => {
    const remaining = preparing.find(
      (item) => item.recipe_id === food.recipe_id
    );
    if (remaining) {
      toast('You have already add this item!', {
        icon: '✌️',
      });
    } else {
      const newFood = [...preparing, food];
      setPreparing(newFood);
    }
  };
  return (
    <section className="py-[50px] w-[1280px] mx-auto">
      <div className="text-center">
        <h1 className="text-[#150b2b] text-[32px] font-bold ">
          Our All Recipes
        </h1>
        <p className="w-[45%] mx-auto font-bold">
          Here Are Our All Recipes at Bite Bills! Discover a variety of
          delicious recipes that inspire your cooking adventures and delight
          your taste buds!
        </p>
      </div>
      <div className="flex  py-[50px] gap-5">
        <div className="md:w-2/3 grid grid-cols-2 gap-5">
          {recipes.map((recipe, idx) => (
            <Recipe recipe={recipe} key={idx} addToPreparing={addToPreparing} />
          ))}
        </div>

        <div className="md:w-1/3 bg-[#ebe9e975] p-[10px] rounded-lg border-[#e5e1e1]">
          <ProcessingFood preparing={preparing} />
        </div>
      </div>
    </section>
  );
};

export default Recipes;
