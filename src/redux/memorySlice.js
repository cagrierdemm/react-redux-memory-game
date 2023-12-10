import { createSlice } from "@reduxjs/toolkit";

const shuffleArray = (array) => {
    const newArray = array.slice();

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const memorySlice = createSlice({
    name: 'memory',
    initialState: {
        opened: [],
        matched: [],
        score: 0,
        lastClicked: null,
        items: [
            "#000000",
            "#908f8f",
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#00ffff",
            "#000000",
            "#908f8f",
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#00ffff"
        ]
    },
    reducers: {
        open: (state, action) => {
                  
            state.opened.push(action.payload);
      
            if (state.opened.length > 1) {

              if (state.opened[0] === state.lastClicked) {
                state.matched.push(state.lastClicked);
                state.score+=50;
              }
              else{
                state.score-=10;
              
              }

              state.opened = [];
              
            }
          },
        lastClick: (state, action) => {
            state.lastClicked = action.payload;
        },
        initializeGame: (state) => {
            state.opened = [];
            state.matched = [];
            state.score = 0;
            state.lastClicked = null;
            state.items = shuffleArray(state.items);
        }
    },
})

export const { open, lastClick, initializeGame} = memorySlice.actions;

export default memorySlice.reducer;