import { formAPI } from "../api/formApi"

const ISFETCHING = 'formReducer/ISFETCHING'
const SENDING_FORM = 'formReducer/SENDING_FORM'
const SENDING_RESULT = 'formReducer/SENDING_RESULT'

const initialState = {
   isFetching: false,
   sending: false,
   sendingResult: {
      status: false,
      error: false
   }
}

let formReducer = (state = initialState, action) => {
   switch (action.type) {
      case ISFETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }

      case SENDING_FORM:
         return {
            ...state,
            sending: action.sending
         }

      case SENDING_RESULT:
         return {
            ...state,
            sendingResult: {...state.sendingResult,
               status: action.status,
               error: action.error
            }
         }

      default:
         return state;
   }
}

export const isFetchingAC = (isFetching) => ({type: ISFETCHING, isFetching});
const sendingAC = (sending) => ({ type: SENDING_FORM, sending });
export const sendingResultAC = (status=false, error=false) => ({ type: SENDING_RESULT, status, error });

export const sendingForm = (data) => async (dispatch) => {
   dispatch(sendingAC(true))
   let response = await formAPI.putFormApi(data);
   if (response.data.resultCode === 0) {
      dispatch(sendingAC(false));
      dispatch(sendingResultAC(true, false));
   } else {
      dispatch(sendingAC(false));
      dispatch(sendingResultAC(true, true));
   }
}

export default formReducer;