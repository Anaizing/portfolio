---
title: XR 8th wall
date: "2023-01-28"
thumbnail: ./eigthwal.png
background: https://res.cloudinary.com/soggy-ink-games/image/upload/v1748265072/portfolio/xr-ian_whe7np.png
description: This is an augmented reality (AR) character animation built with 8th wall, using 3D assets animated with adobe mixamo as well as 3D AI generated assets
tags: AR 8th-wall character-animation mixamo typescript
---

# AR character animation in 8th Wall

![unity visual effects graph](https://res.cloudinary.com/soggy-ink-games/image/upload/v1748264627/portfolio/dancing8wall_j5keey.jpg)

This AR experience, inspired by a real-life exhibit at San Francisco's MoMA during my first GDC, showcases my expertise in creating engaging mixed reality experiences, leveraging Niantic's 8th Wall toolkit.

- <b>3D Animation</b>: Animated a 3D sculpture asset using <b>Adobe Mixamo</b> incorporating a collection of dancing animations.
- <b>AR Experience Development</b>: Prepared and uploaded GLB files to <b>Niantic's 8th Wall</b> to create an interactive augmented reality experience.
- Mixed Reality Integration: Demonstrated proficiency in blending digital 3D assets with real-world environments
  to deliver an immersive AR project.

[view video here](https://res.cloudinary.com/soggy-ink-games/video/upload/v1748270723/portfolio/8thwallMP4_x86gnl.mp4)

## next steps

WIP-Working on a script to traverse the animations when the user taps the screen

```ts
import * as ecs from "@8thwall/ecs";

// Define the schema for the TapAnimationPlayer component.
// This schema specifies the properties that instances of this component will have.
ecs.registerComponent({
  name: "TapAnimationPlayer", // The unique name of our component.
  schema: {
    // The URL to your GLB model file.
    modelUrl: ecs.string,
    // An optional array of animation clip names to play.
    // If empty, the component will try to find all clips in the GLB.
    animationClipNames: ecs.array(ecs.string), //todo: fix this
    // Whether the animations should loop.
    loopAnimations: ecs.bool
  },
  schemaDefaults: {
    modelUrl: "assets/artMan.glb", // Default GLB path. IMPORTANT: Change this to your actual GLB file!
    animationClipNames: [], // Default to an empty array, meaning discover clips.
    loopAnimations: false // Default to not looping.
  },
  data: {
    // Internal state for the component.
    // This will store the entity ID of the GLB model once it's created.
    modelEid: ecs.eid,
    // This will store the index of the currently playing animation clip.
    currentClipIndex: ecs.i32,
    // This will store the actual list of clip names found in the GLB,
    // or the ones provided in the schema if specified.
    resolvedClipNames: ecs.array(ecs.string)
  },

  // The 'add' method is called when this component is added to an entity.
  add: (world, component) => {
    const { modelUrl, animationClipNames, loopAnimations } = component.schema;
    const { eid } = component; // The entity this component is attached to.

    // 1. Create an entity for the GLB model.
    // We'll attach the GLB to the same entity that has this component.
    // This allows us to easily manage the GLB's properties (position, scale, animation)
    // through the entity this component is attached to.
    // Note: This means the GLB model will be a direct child of the entity this component is on.
    const modelEntity = eid; // Use the component's own entity for the model.
    component.data.modelEid = modelEntity; // Store the model's entity ID in component data.

    // Set initial position and scale for the model. Adjust as needed.
    ecs.Position.set(world, modelEntity, { x: 0, y: 0, z: -1 }); // Example position
    ecs.Scale.set(world, modelEntity, { x: 0.5, y: 0.5, z: 0.5 }); // Example scale

    // 2. Add the GLTF model component to the model entity.
    ecs.GltfModel.set(world, modelEntity, {
      url: modelUrl,
      // The onLoaded callback is crucial here. It fires when the GLB model is fully loaded
      // and its animation clips are available.
      onLoaded: (modelEid, model) => {
        // Resolve the animation clip names.
        // If animationClipNames was provided in the schema, use those.
        // Otherwise, extract all clip names directly from the loaded GLB model.
        // 8th Wall's GltfModel typically provides 'model.animations' as an object
        // where keys are the animation clip names.
        const clipsToUse =
          animationClipNames.length > 0
            ? animationClipNames
            : Object.keys(model.animations);

        if (clipsToUse.length === 0) {
          console.warn(
            `TapAnimationPlayer: No animation clips found in ${modelUrl}.`
          );
          return;
        }

        // Store the resolved clip names and initialize the current clip index.
        component.data.resolvedClipNames = clipsToUse;
        component.data.currentClipIndex = -1; // Start at -1 so the first tap plays index 0.

        console.log(
          `TapAnimationPlayer: Loaded ${modelUrl}. Found clips:`,
          clipsToUse
        );

        // Add the GltfAnimation component to the model entity.
        // Initially, set play to false. The first tap will start the first animation.
        ecs.GltfAnimation.set(world, modelEntity, {
          clip: "", // No clip playing initially.
          loop: loopAnimations,
          play: false,
          speed: 1.0
        });
      },
      // Added onError callback to handle GLB loading failures.
      onError: (modelEid, error) => {
        console.error(
          `TapAnimationPlayer: Failed to load GLB model from ${modelUrl}:`,
          error
        );
      }
    });

    // 3. Add a pointerdown (tap) event listener to the world.
    // This listener will be triggered whenever the user taps anywhere on the screen.
    ecs.Input.on(world, "pointerdown", event => {
      const { modelEid, resolvedClipNames } = component.data;

      // Ensure the model is loaded and has animation clips.
      if (!modelEid || resolvedClipNames.length === 0) {
        console.log(
          "TapAnimationPlayer: Model not loaded or no clips available yet."
        );
        return;
      }

      // Get the current animation component for the model.
      const gltfAnimation = ecs.GltfAnimation.get(world, modelEid);
      if (!gltfAnimation) {
        console.warn(
          "TapAnimationPlayer: GltfAnimation component not found on model entity."
        );
        return;
      }

      // Calculate the next animation clip index.
      let nextClipIndex = component.data.currentClipIndex + 1;
      if (nextClipIndex >= resolvedClipNames.length) {
        nextClipIndex = 0; // Cycle back to the first animation.
      }

      const nextClipName = resolvedClipNames[nextClipIndex];

      // Update the GltfAnimation component to play the next clip.
      ecs.GltfAnimation.set(world, modelEid, {
        clip: nextClipName, // Set the new clip name.
        loop: loopAnimations, // Use the loop setting from the component schema.
        play: true, // Start playing the animation.
        speed: 1.0 // Reset speed if needed, or keep it constant.
      });

      // Update the component's internal state with the new current clip index.
      component.data.currentClipIndex = nextClipIndex;

      console.log(
        `TapAnimationPlayer: Playing animation clip: "${nextClipName}"`
      );
    });
  },

  // The 'tick' method is called on every frame. Not needed for this specific logic.
  tick: (world, component) => {
    // No continuous logic needed here for animation switching on tap.
  },

  // The 'remove' method is called when this component is removed from an entity.
  remove: (world, component) => {
    // Clean up if necessary, e.g., remove the model entity or event listeners.
    // In this case, the model entity is the same as the component's entity,
    // so it will be removed when the component's entity is removed.
    // The Input.on listener is automatically managed by 8th Wall ECS.
    console.log("TapAnimationPlayer: Component removed.");
  }
});

// Example of how you would add this component to an entity in your main 8th Wall app.
// You would typically do this in your main app.js or a similar setup file.
// For instance, if you have an 'app-root' entity:
// ecs.TapAnimationPlayer.set(world, world.appRoot, {
//   modelUrl: 'assets/MyCharacter.glb', // Make sure this path is correct!
//   animationClipNames: ['Idle', 'Walk', 'Run'], // Optional: specify clip names if you know them
//   loopAnimations: false,
// });
```
