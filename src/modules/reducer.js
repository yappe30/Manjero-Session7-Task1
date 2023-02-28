import * as actions from "./actionType";

const initState ={
    employeData: [],
}

export const reducer = (state = initState, action) => {

    switch(action.type){
        case actions.ON_POST_EMP:
            return {...state, employeData: [...state.employeData, action.payload.httpResponse]}
        case actions.ON_GET_EMP:
            return {...state, employeData: action.payload.httpResponse}
        default:
            return state
    }

}

export default reducer;