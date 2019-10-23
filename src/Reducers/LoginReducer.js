import MenuModal from "../Components/MenuModal"



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
            mealorder:[...state.mealorder,action.title]
        }
    }

    else if(action.type==="ACTION_ADDMEALMODAL"){
        console.log("add meal")
        return {
            ...state,
            menuModal:action.menuModal
        }
    }

    else if(action.type==="ACTION_REMOVEMEALMODAL"){
        console.log("remove")
        return {
            ...state,
            menuModal:null
        }
    }


    
    return state;

}

export default LoginReducer;