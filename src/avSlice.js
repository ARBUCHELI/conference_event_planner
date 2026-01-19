import { createSlice } from "@reduxjs/toolkit";

// Add-ons images should be placed in /public/images/addons/
// Suggested filenames:
// - projector.jpg (Pixabay ID: 20031)
// - speakers.jpg (Pixabay ID: 4109274)
// - microphone.jpg (Pixabay ID: 3926344)
// - whiteboard.png (Pixabay ID: 2903269)
// - signs.jpg (Pixabay ID: 235079)
// Image paths should use: "/images/addons/[filename]"


export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "/images/addons/projector.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "images/addons/speakers.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "images/addons/microphone.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "images/addons/whiteboard.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "images/addons/signs.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
