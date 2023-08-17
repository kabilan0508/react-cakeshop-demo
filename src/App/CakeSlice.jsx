import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = {
  cakes: [
    {
      id: "cake001",
      cakeName: "Classic Chocolate Delight",
      flavor: "Chocolate",
      price: 35.99,
      stock: 10,
      image:
        "https://img.freepik.com/free-photo/top-view-chocolate-table-dark-surface-chocolate-chocolate-sauce-bowls_140725-111605.jpg",
      type: "Layer Cake",
      description:
        "Indulge in rich chocolate goodness with our classic chocolate cake.",
    },
    {
      id: "cake002",
      cakeName: "Velvety Red Velvet Dream",
      flavor: "Red Velvet",
      price: 42.5,
      stock: 5,
      image:
        "https://img.freepik.com/free-photo/front-view-red-cake-shape-heart-stand_141793-17480.jpg",
      type: "Layer Cake",
      description:
        "Experience the luxurious taste of red velvet in every bite.",
    },
    {
      id: "cake003",
      cakeName: "Zesty Lemon Sunshine",
      flavor: "Lemon",
      price: 30.0,
      stock: 8,
      image:
        "https://img.freepik.com/free-photo/lemon-cheesecake-with-mascarpone-cream-cheese_140725-10968.jpg",
      type: "Layer Cake",
      description: "Refresh your senses with the zesty flavor of lemon.",
    },
  ],
};

export const CakeSlice = createSlice({
  name: "cakestock",
  initialState: DUMMY_DATA,
  reducers: {},
});

// export const {}= CakeSlice.actions;

export default CakeSlice.reducer;
