import { createSlice } from "@reduxjs/toolkit";

const ShoppingCartSlices = createSlice({
    name: "ShoppingCartSlices",
    initialState: {
        dummyArray: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount: 1,
                id: 1,
                Quantity: 1
            },

            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 2',
                paragraph: 'Paragraph 2',
                amount: 12,
                id: 2,
                Quantity: 1
            },

            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 3',
                paragraph: 'Paragraph 3',
                amount: 43,
                id: 3,
                Quantity: 1
            },

            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 4',
                paragraph: 'Paragraph 4',
                amount: 44,
                id: 4,
                Quantity: 1
            },
        ],
        addToCart: [],

    },

    reducers: {
        ShowAllCarts: (state, action) => {
            const data = action.payload
            console.log(data)
        },
        AddToCartHandler: (state, action) => {
            if (state.addToCart.length === 0) {
                state.addToCart = [action.payload]
            } else {
                state.addToCart = [...state.addToCart, action.payload]
            }
             
        },
        QuantityIncrease: (state, action) => {
            const id = action.payload;
            const updatedCart = state.addToCart.map((cart) => {
              const updatedItems = cart.map((item) => {
                if (item.id === id) {
                  return {
                    ...item,
                    Quantity: item.Quantity + 1,
                  };
                }
                return item;
              });
              return updatedItems;
            });
            state.addToCart = updatedCart;
          },
        QuantityDecrease: (state, action) => {
            const id = action.payload;
            const updatedCart = state.addToCart.map((cart) => {
              const updatedItems = cart.map((item) => {
                if (item.id === id) {
                    if(item.Quantity === 1){
                        return item;
                    }else{
                        return {
                            ...item,
                            Quantity: item.Quantity - 1,
                        }
                    }  
                }
                return item;
              });
              return updatedItems;
            });
            state.addToCart = updatedCart;
          },
          removeCart : (state, action)=>{
            const id = action.payload
            const removeItems = state.addToCart.map((items)=>{
                const removeItem = items.filter((cart)=>(cart.id==id))
                return removeItem;
            })
            state.addToCart = removeItems;
          }
          
           
    },
});


export const { ShowAllCarts, AddToCartHandler,QuantityIncrease,QuantityDecrease,removeCart } = ShoppingCartSlices.actions;

export default ShoppingCartSlices.reducer;
