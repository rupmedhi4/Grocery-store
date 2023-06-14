import { createSlice } from "@reduxjs/toolkit";

const ShoppingCartSlices = createSlice({
    name: "ShoppingCartSlices",
    initialState: {
        dummyArray: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 5',
                paragraph: 'Paragraph 5',
                amount : 5445,
                id:1
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount : 542456,
                id:2
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount : 54235465,
                id:3
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount : 5423546576,
                id:4
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount : 542,
                id:5
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount : 542,
                id:6
            },
           
          
           

        ],
        addToCart:[]

    },

    reducers: {
        ShowAllCarts: (state, action) => {
            const data = action.payload
            console.log(data)
        },
        AddToCartHandler : (state, action)=>{
            if(state.addToCart === 0){
                   state.addToCart = [action.payload]
            }else{
                state.addToCart = [...state.addToCart,action.payload]
            }

            
         
            console.log(state.addToCart)
            
          }
    },
});


export const { ShowAllCarts,AddToCartHandler } = ShoppingCartSlices.actions;

export default ShoppingCartSlices.reducer;
