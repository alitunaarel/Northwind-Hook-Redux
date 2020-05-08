import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductsSuccess(products) {
  return { type: actionTypes.CREATE_PRODUCTS_SUCCESS, payload: products };
}

export function updateProductsSuccess(products) {
  return { type: actionTypes.UPDATE_PRODUCTS_SUCCESS, payload: products };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/product/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function(dispatch) {
    return saveProductApi(product)
      .then(saveProduct => {
        product.id
          ? dispatch(updateProductsSuccess(saveProduct))
          : dispatch(createProductsSuccess(saveProduct));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getProducts(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}
