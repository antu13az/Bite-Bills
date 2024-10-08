import homePageImg from "../../../assets/homepage-1.jpeg";
const HomePage = () => {
  return (
    <section
      className="bg-cover bg-center h-[85vh] "
      style={{ backgroundImage: `url(${homePageImg})` }}
    >
      <div className="text-white flex items-center flex-col justify-center h-full">
        <h1 className="text-[52px] font-bold">
          Bite into Bills at Bite Bills
          <br /> Your Perfect Food Haven
        </h1>
        <p className="font-bold">
          Discover our menu filled with fresh, offering you the perfect blend of
          taste and quality at an unbeatable price.
        </p>
        <div className="flex gap-3 mt-8">
          <button className="text-black font-bold border px-[35px] py-[10px] rounded-full bg-[#0be58a] ">
            Explore now
          </button>
          <button className=" font-bold border-2 px-[35px] py-[10px] rounded-full">
            Feedback Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
