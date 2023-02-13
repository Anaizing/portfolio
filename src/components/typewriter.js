import React from "react";
import Typewriter from "typewriter-effect";

export const TypewriterIntro = ({}) => {
  return (
    <Typewriter
      options={{
        deleteSpeed: 20,
        delay: 59
      }}
      onInit={typewriter => {
        typewriter
          .typeString(
            "I AM A FRONTEND ENGINEER, VR/XR DEVELOPER AND FOUNDER BASED IN SYDNEY. I HAVE MANY YEARS OF EXPERIENCE IN SOFTWARE DEVELOPMENT AND ALL THINGS DIGITAL. I LOVE"
          )
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(300)
          .start();
        typewriter
          .typeString(" 3D DESIGN.")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(400)
          .deleteChars(10)
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
        typewriter
          .typeString("GAME DEVELOPMENT.")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(400)
          .deleteChars(17)
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
        typewriter
          .typeString("LEARNING NEW TECH.")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(500)
          .deleteChars(18)
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
        typewriter
          .typeString("DANCING.")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(400)
          .deleteChars(8)
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
        typewriter
          .typeString("MAKING STUFF.")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(300)
          .deleteChars(1)
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
        typewriter
          .typeString(" ;)")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(300)
          .start();
      }}
    />
  );
};

// I LOVE 3D DESIGN. I LOVE GAME DEVELOPMENT. I LOVE LEARNING NEW TECH. I LOVE DANCING AND MAKING STUFF.
