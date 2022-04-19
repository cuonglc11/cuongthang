export const CAP_NHAT_EMAIL = "CAP_NHAT_EMAIL"

const initalState ={
    email : "",
    score :  0,
    address :"",
    id :""
}
export default function actionForReducer(state = initalState , payload){
    switch (payload.type) {
        case CAP_NHAT_EMAIL:
            return {
                ...state,
                email : payload.email
            }
    
        default:
            return state;
    }
}