import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { DeleteProductActionError, DeleteProductActionSuccess, GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, NewProductActionSuccess, ProductsActions, ProductsActionsTypes, SaveProductActionError, SaveProductActionSuccess, SearchProductsActionError, SearchProductsActionSuccess, SelectProductActionError, SelectProductActionSuccess } from "./products.actions";

@Injectable()
export class ProductsEffects {
    constructor(private productsService:ProductsService, private effectActions:Actions){
    }

    // Get all products
    getAllProductsEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap((action:ProductsActions)=>{
            return this.productsService.getProducts()
            .pipe(
                map((products)=> new GetAllProductsActionSuccess(products)),
                catchError((err)=>of(new GetAllProductsActionError(err.message)))
            )
        })
    ));

    // Get selected products
    getSelectedProductsEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
        mergeMap((action:ProductsActions)=>{
            return this.productsService.getSelectedProducts()
            .pipe(
                map((products)=> new GetSelectedProductsActionSuccess(products)),
                catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
            )
        })
    ));

    // Search products Effect
    searchProductsEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
        mergeMap((action:ProductsActions)=>{
            return this.productsService.searchProducts(action.payload)
            .pipe(
                map((products)=> new SearchProductsActionSuccess(products)),
                catchError((err)=>of(new SearchProductsActionError(err.message)))
            )
        })
    ));

    // Select product Effect
    selectProductEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.SELECT_PRODUCT),
        mergeMap((action:ProductsActions)=>{
            return this.productsService.setSelected(action.payload)
            .pipe(
                map((product)=> new SelectProductActionSuccess(product)),
                catchError((err)=>of(new SelectProductActionError(err.message)))
            )
        })
    ));

    // Delete product Effect
    deleteProductEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.DELETE_PRODUCT),
        mergeMap((action:ProductsActions)=>{
            return this.productsService.delete(action.payload.id)
            .pipe(
                map(()=> new DeleteProductActionSuccess(action.payload)),
                catchError((err)=>of(new DeleteProductActionError(err.message)))
            )
        })
    ));

    // New product Effect
    newProductEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.NEW_PRODUCT),
        map((action:ProductsActions)=>{
            return new NewProductActionSuccess({});
        })
    ));

    // Save product Effect
    saveProductEffect:Observable<ProductsActions> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.SAVE_PRODUCT),
        mergeMap((action:ProductsActions)=>{
            return this.productsService.save(action.payload)
            .pipe(
                map((product)=> new SaveProductActionSuccess(product)),
                catchError((err)=>of(new SaveProductActionError(err.message)))
            )
        })
    ));

}
