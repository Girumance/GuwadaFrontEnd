import MenuModal from "../Components/MenuModal"
import { connect } from "react-redux"



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
                isLoggedIn:!state.isLoggedIn,
                mealorder:[]

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
            mealorder:[...state.mealorder,action.meal]
        }
    }

    else if(action.type==="ACTION_ADDMEALARRAY"){
        
        return {
            ...state,
            mealorder:action.meal
        }
    }

    else if(action.type==="ACTION_ADDMEALMODAL"){
        
        return {
            ...state,
            menuModal:action.menuModal
        }
    }

    else if(action.type==="ACTION_REMOVEMEALMODAL"){
        
        return {
            ...state,
            menuModal:null
        }
    }

    else if(action.type==="ACTION_LGCOMP"){
        
        return {
            ...state,
            logincomp:action.lgcomp
        }
    }

    else if(action.type==="ACTION_ADDACCOUNT"){
        return {
            ...state,
            account:action.account
        }
    }

    else if(action.type==="ACTION_MENUS"){
        
        return {
            ...state,
            menus:action.menus
        }
    }

    else if(action.type==="ACTION_ADDSEARCH"){
        
        return {
            ...state,
            searchRes:action.searchRes
        }
    }

    else if(action.type==="ACTION_SEARTITLE"){
        
        
        return {
            ...state,
            searchTitle:action.searchTitle
        }
    }

    else if(action.type==="ACTION_ADDKITCHEN"){
        
        console.log("from addkit")
        return {
            ...state,
            kit:action.kit
        }
    }




    
    return state;

}

export default LoginReducer;