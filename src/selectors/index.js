export const productsSelector = state => state.appData.products || [];
export const bannerMessageSelector = state => state.appData.bannerMessage || '';
export const ordersSelector = state => state.appData.orders || []; //Eventually obtained from Services

export const cartSelector = state => state.appContext.cart || [];
