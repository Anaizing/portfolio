import { StyleSheet } from "aphrodite";
// import swap from "react-magic/lib/magic/swap"; //todo: better perf
import { swap, vanishIn } from "react-magic";

export const stylesSwap = StyleSheet.create({
  magic: {
    animationName: swap,
    animationDuration: "1s"
  }
});

export const stylesVanishIn = StyleSheet.create({
  magic: {
    animationName: vanishIn,
    animationDuration: "1s"
  }
});
