import CategoriesTypes from "./types";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
    {
      title: "mens ^&&^^",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 6,
      linkUrl: "shop/tv",
    },
    {
      title: "tvvvv^",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 7,
      linkUrl: "shop/tv",
    },
  ],
  categ: [],
  errorMessage: undefined,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categ: action.payload.data,
      };
    case CategoriesTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default directoryReducer;
