import {FETCH_WEATHER} from '../actions/index'


export default function(state=[],action){


  switch(action.type){
    case FETCH_WEATHER :

    console.log(action.payload.data.city.name)

        return [ ...state , action.payload.data ];
  }
    return state;




}