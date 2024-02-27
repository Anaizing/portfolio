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
            "HEY THERE! i AM iAN, a FRONTEND ENGINEER, VR/XR DEVELOPER AND FOUNDER BASED IN SYDNEY. "
          )
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
        typewriter
          .typeString(
            "I HAVE OVER 5 YEARS EXPERIENCE IN SOFTWARE DEVELOPMENT AND ALL THINGS DIGITAL "
          )
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
        typewriter
          .typeString(" ..I LOVE ")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
        typewriter
          .typeString(" 3D DESIGN.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(10)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString("GAME DEVELOPMENT.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(17)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString("LEARNING NEW TECH.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(500)
          .deleteChars(18)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString("DANCING.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(8)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString(
            `<a href="./codepens"><span style="color: #04F4F0" > MAKING STUFF </span></a>`
          )
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .deleteChars(1)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString(" ;)")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
      }}
    />
  );
};
