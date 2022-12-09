import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductsActionsTypes{
    // Get all products
    GET_ALL_PRODUCTS="[Products] Get all products",
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get all products success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get all products error",
    // Get Selected products
    GET_SELECTED_PRODUCTS="[Products] Get selected products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get selected products success",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get selected products error",
    // Search products
    SEARCH_PRODUCTS="[Products] Search products",
    SEARCH_PRODUCTS_SUCCESS="[Products] Search products success",
    SEARCH_PRODUCTS_ERROR="[Products] Search products error",
    // Select product
    SELECT_PRODUCT="[Product] Select product",
    SELECT_PRODUCT_SUCCESS="[Product] Select product success",
    SELECT_PRODUCT_ERROR="[Product] Select product error",
    // Delete product
    DELETE_PRODUCT="[Product] Delete product",
    DELETE_PRODUCT_SUCCESS="[Product] Delete product success",
    DELETE_PRODUCT_ERROR="[Product] Delete product error",
    // New product
    NEW_PRODUCT="[Product] New product",
    NEW_PRODUCT_SUCCESS="[Product] New product success",
    NEW_PRODUCT_ERROR="[Product] New product error",
    // Save product
    SAVE_PRODUCT="[Product] Save product",
    SAVE_PRODUCT_SUCCESS="[Product] Save product success",
    SAVE_PRODUCT_ERROR="[Product] Save product error",
}

// Get all products actions

export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any){
  }
}

export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string){
  }
}

// Get selected products actions

export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any){
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string){
  }
}

// Search products actions

export class SearchProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload:string){
  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){
  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string){
  }
}

// Select product actions

export class SelectProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public payload:Product){
  }
}

export class SelectProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product){
  }
}

export class SelectProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string){
  }
}

// Delete product actions

export class DeleteProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public payload:Product){
  }
}

export class DeleteProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:Product){
  }
}

export class DeleteProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string){
  }
}

// New product actions

export class NewProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT;
  constructor(public payload:any){
  }
}

export class NewProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload:any){
  }
}

export class NewProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string){
  }
}

// Save product actions

export class SaveProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT;
  constructor(public payload:Product){
  }
}

export class SaveProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product){
  }
}

export class SaveProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string){
  }
}

export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
  | SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
  | SelectProductAction | SelectProductActionSuccess | SelectProductActionError
  | DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
  | NewProductAction | NewProductActionSuccess | NewProductActionError
  ;
