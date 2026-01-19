import { createSlice } from "@reduxjs/toolkit";

// Add-ons images should be placed in /public/images/addons/
// Suggested filenames:
// - projector.jpg (Pixabay ID: 20031)
// - speakers.jpg (Pixabay ID: 4109274)
// - microphone.jpg (Pixabay ID: 3926344)
// - whiteboard.jpg (Pixabay ID: 2903269)
// - signs.jpg (Pixabay ID: 235079)
// Image paths should use: "/images/addons/[filename]"

export const avSlice = createSlice({
  name: "av",
  initialState: [
    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      
    },
    decrementAvQuantity: (state, action) => {
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
