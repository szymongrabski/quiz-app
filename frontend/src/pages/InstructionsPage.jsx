import React from "react";
import Header from "../components/Header";

const InstructionsPage = () => {
  return (
    <div>
      <Header/>
      <div>
        <p className="text-white text-lg text-center p-2">
          KaBOOT is an interactive quiz web application that enables you to indicate the answer using your hand!
        </p>
        <p className="text-white text-center">
          Note: Please for now use your right hand, this issue will be fixed in the future.
        </p>
        <div className="flex justify-center flex-col w-[60%] mx-auto my-5 gap-5 text-white text-center">
          <p>Here are examples of how to gesture answers and accept or decline them.</p>
          <img src={`${process.env.PUBLIC_URL}/images/one.jpg`} alt="Example of indicating answer one" />
          <p>Gesture representing answer one</p>
          <img src={`${process.env.PUBLIC_URL}/images/two.jpg`} alt="Example of indicating answer two" />
          <p>Gesture representing answer two</p>
          <img src={`${process.env.PUBLIC_URL}/images/three.jpg`} alt="Example of indicating answer three" />
          <p>Gesture representing answer three</p>
          <img src={`${process.env.PUBLIC_URL}/images/four.jpg`} alt="Example of indicating answer four" />
          <p>Gesture representing answer four</p>
          <img src={`${process.env.PUBLIC_URL}/images/accept.jpg`} alt="Example of indicating answer accept" />
          <p>Gesture representing accepting the answer</p>
          <img src={`${process.env.PUBLIC_URL}/images/decline.jpg`} alt="Example of indicating answer decline" />
          <p>Gesture representing declining the answer</p>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
