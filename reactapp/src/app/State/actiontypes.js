//this will contain all the action types that we raise on action creators or events

//For User
export const AddUserToStore = "USER.AddUserToStore";
export const AddhabitToStore = "USER.AddHabitToStore";


//For Product
export const FETCH_PRODUCTS = "PRODUCT.FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//For Cart
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//showLoading
export const SHOW_LOADING = "SHOW.LOADING";

//For Coupon
export const UPDATE_COUPON = "COUPON.UPDATE_COUPON";

//For RecentOrders
export const ADD_RECENTORDERS = "RECENTORDERS.ADD_ITEM";
export const EMPTY_RECENTORDERS = "RECENTORDERS.EMPTY_CART";
export const REMOVE_RECENTORDERS = "RECENTORDERS.REMOVE_ITEM";
export const UPDATE_RECENTORDERS = "RECENTORDERS.UPDATE_ITEM";

