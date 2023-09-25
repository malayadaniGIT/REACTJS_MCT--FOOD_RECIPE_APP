const initialData={
    recipedata:[]
}

const reducer=(state=initialData,action)=>{
    switch(action.type){
        case "RECIPE":
            state={
                ...state,
                recipedata:action.payload,
            }
            break;
    }
    return state
}
export default reducer