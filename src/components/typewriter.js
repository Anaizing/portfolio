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
            "HEY THERE! i AM iAN, A FULLSTACK SOFTWARE ENGINEER & XR GAME DEVELOPER BASED IN SYDNEY. "
          )
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
        typewriter
          .typeString(
            "I HAVE OVER 7 YEARS EXPERIENCE IN SOFTWARE DEVELOPMENT AND ALL THINGS DIGITAL "
          )
          .pauseFor(300)
          .start();
      }}
    />
  );
};

export const TypewriterILove = ({}) => {
  return (
    <Typewriter
      options={{
        deleteSpeed: 20,
        delay: 77
      }}
      onInit={typewriter => {
        typewriter
          .pauseFor(8000)
          // .start()
          .typeString(" ..I LOVE ")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
        typewriter
          .typeString(" 3D DESIGN.")
          .pauseFor(400)
          .deleteChars(10)
          .start();
        typewriter
          .typeString(" GAME DEVELOPMENT.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(18)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString(" VR DEVELOPMENT.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(16)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString(" BUILDING SHADERS.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(18)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString(" BUILDING AI AGENTS.")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(400)
          .deleteChars(20)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString(" WEB DEVELOPMENT.")
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
            `<a href="./weber"><span id="under" style="color: #04F4F0" > BUILDING EXPERIENCES </span></a>`
          )
          .pauseFor(300)
          .deleteChars(1)
          // .callFunction(() => {
          //   console.log("All strings were deleted");
          // })
          .start();
        typewriter
          .typeString("  ;)")
          // .callFunction(() => {
          //   console.log("String typed out!");
          // })
          .pauseFor(300)
          .start();
      }}
    />
  );
};
