import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./component/Header/Header";
import HomePage from "./component/HomePage/HomePage";
import Recipes from "./component/Recipes/Recipes";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Recipes />

    <Toaster/>
    </>
  );
}

export default App;
