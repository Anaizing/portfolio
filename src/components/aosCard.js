import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSImageCard = props => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos={props.dataAOSStyle}
      data-aos-offset={props.offset}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      <img src={props.image} alt={props.alt}></img>
    </div>
  );
};

export const AOSMovementWrapper = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="600"
      data-aos-delay="30"
      data-aos-easing="ease-in-sine"
      data-aos-duration="40000"
    ></div>
  );
};

//todo: add al1y stuff alt

//todo: add  these attributes with conditionals
// data-aos-duration={props.duration}
// data-aos-easing={props.offset}
// data-aos-anchor={props.anchor}
// data-aos-delay={props.delay}

//todo: pass all these as props.dataAOSStyle as an object to spread
// fade-up
// fade-down
// fade-right
// fade-left
// fade-up-right
// fade-up-left
// fade-down-right
// fade-down-left

// flip-left
// flip-right
// flip-up
// flip-down

// zoom-in
// zoom-in-up
// zoom-in-down
// zoom-in-left

//todo add these images to graphql data
{
  /* <img src="https://images.unsplash.com/photo-1499781749692-e8274262c718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3665&q=80" alt="blue" style={{ width: 400, height: 400 }} ></img>

<img src="https://res.cloudinary.com/soggy-ink-games/image/upload/v1696814381/me/vusa41iuwerdw8qdysmq.png" alt="me" style={{ width: 400, height: 400 }} ></img> */
}

// export const AOSFadeDown = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-down" >
//         </div>
//     );
// }

// export const AOSFadeRight = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-right" >
//         </div>
//     );
// }

// export const AOSFadeLeft = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-left" >
//         </div>
//     );
// }

// export const AOSFadeUpRight = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-up-right" >

//         </div>
//     );
// }

// export const AOSFadeUpLeft = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-up-left" >
//         </div>
//     );
// }

// export const AOSFadeDownLeft = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-down-left" >
//         </div>
//     );
// }

// export const AOSFadeDownRight = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="fade-down-right" >
//         </div>
//     );
// }

// export const AOSFlipLeft = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="flip-left" >
//         </div>
//     );
// }

// export const AOSFlipRight = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="flip-right" >
//         </div>
//     );
// }

// export const AOSFlipUp = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="flip-up" >

//         </div>
//     );
// }

// export const AOSFlipDown = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="flip-down" >
//         </div>
//     );
// }

// export const AOSZoomIn = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="zoom-in" >
//         </div>
//     );
// }

// export const AOSZoomInUp = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="zoom-in-up" >
//         </div>
//     );
// }

// export const AOSZoomInDown = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="zoom-in-down" >
//         </div>
//     );
// }

// export const AOSZoomInLeft = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div id="" data-aos="zoom-in-left" >
//         </div>
//     );
// }
