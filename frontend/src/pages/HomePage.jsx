import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="w-[80%] m-auto">
        <Categories/>
      </div>
    </div>
  )
};

export default HomePage;
