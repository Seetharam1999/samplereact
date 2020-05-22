import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';


//ftechComments for the dishes
export const fetchComments=()=>(dispatch)=>{
    return fetch(baseUrl+'comments')
            .then(response=>{
                if(response.ok){
                    return response;
                }
                else{
                    var error=new Error('Error '+response.status +':'+response.statusText);
                    error.response=response;
                    throw error;
                }
            },
            error=>{
                var errMess =new Error(error.message);
                throw errMess; 
            })
            .then(response=>response.json)
            .then(comments=>dispatch(addComments(comments)))
            .catch(error=>dispatch(commentsFailed(error.message)))
}

export const commentsFailed=(errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments=(Comment)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:Comment
});

//Dishes
export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading())
    return fetch(baseUrl+'dishes')
            .then(response=>{
                if(response.ok){
                    return response;
                }
                else{
                    var error=new Error('Error '+response.status +':'+response.statusText);
                    error.response=response;
                    throw error;
                }
            },
            error=>{
                var errMess =new Error(error.message);
                throw errMess; 
            })
            .then(response=>response.json)
            .then(dishes=>dispatch(addDishes(dishes)))
            .catch(error=>dispatch(dishesFailed(error.message)))
}

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes=(Dishs)=>({
    type:ActionTypes.ADD_DISHES,
    payload:Dishs
});

//promotions
export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading())
    return fetch(baseUrl+'promotions')
            .then(response=>{
                if(response.ok){
                    return response;
                }
                else{
                    var error=new Error('Error '+response.status +':'+response.statusText);
                    error.response=response;
                    throw error;
                }
            },
            error=>{
                var errMess =new Error(error.message);
                throw errMess; 
            })
            .then(response=>response.json)
            .then(dishes=>dispatch(addPromos(promos)))
            .catch(error=>dispatch(promosFailed(error.message)))
}

export const promosLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const promosFailed=(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const addPromos=(promos)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
});

//Leaders
export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading())
    return fetch(baseUrl+'leaders')
            .then(response=>{
                if(response.ok){
                    return response;
                }
                else{
                    var error=new Error('Error '+response.status +':'+response.statusText);
                    error.response=response;
                    throw error;
                }
            },
            error=>{
                var errMess =new Error(error.message);
                throw errMess; 
            })
            .then(response=>response.json)
            .then(dishes=>dispatch(addLeaders(leader)))
            .catch(error=>dispatch(leadersFailed(error.message)))
}

export const leadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
});

export const leadersFailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:Dishs
});

