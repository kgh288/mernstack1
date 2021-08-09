import * as ActionTypes from "../ActionTypes";

//updateCoupon
export const updateCoupon = (couponNum) => ({
    type: ActionTypes.UPDATE_COUPON,
    payload: parseInt(couponNum)
});
