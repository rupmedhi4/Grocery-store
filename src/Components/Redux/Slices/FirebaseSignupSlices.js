import { createSlice } from "@reduxjs/toolkit";

const FirebaseSignupSlices = createSlice({
    name: 'Signup',
    initialState: {
      name: "",
      email: "",
      password: "",
      confirmPassword:"",
    },
    reducers: {
        SignUpHandler: (state, action) => {
            state.name = action.payload; 
            console.log(state.name);
          },
    },
  });
  
  export const { SignUpHandler } = FirebaseSignupSlices.actions;
  export default FirebaseSignupSlices.reducer;
  