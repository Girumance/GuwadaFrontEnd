


const LoginReducer=(state={},action) =>{

    if(action.type==="ACTION_LOGIN"){

        return {
            ...state,
            isLoggedIn:!state.isLoggedIn
        }

    }


    else if (action.type==="ACTION_LOGOUT"){

            return {
                ...state,
                isLoggedIn:!state.isLoggedIn

            }

    }
   else if(action.type==="ACTION_ADDKIT"){
    
        return {
            ...state,
            kitchenId:action.kitchenId
        }
    }

    else if(action.type==="ACTION_ADDCUS"){

        return {
            ...state,
            customerId:action.customerId
        }
    }

   

    else if(action.type==="ACTION_ADDMEAL"){

        return {
            ...state,
            mealorder:action.mealorder
        }
    }


    
    return state;

}

export default LoginReducer;