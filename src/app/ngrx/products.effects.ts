import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { GetAllProductsActionError, GetAllProductsActionSuccess, ProductsActions, ProductsActionsTypes } from "./products.actions";

@Injectable()
export class ProductsEffects {
    constructor(private productsService:ProductsService, private effectActions:Actions){
    }

    getAllProductsEffect:Observable<Action> = createEffect(()=>this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap((action)=>{
            return this.productsService.getProducts()
            .pipe(
                map((products)=> new GetAllProductsActionSuccess(products)),
                catchError((err)=>of(new GetAllProductsActionError(err)))
            )
        })
    ));

}
