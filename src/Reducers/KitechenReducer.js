
const KitechenReducer=(state,action) => {

    if(action.type==="ACTION_ADDKIT"){

        return {
            ...state,
            kitechen:action.kit
        }
    }

    return state;

}