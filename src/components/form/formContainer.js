import { connect } from "react-redux";
import { isFetchingAC, sendingForm, sendingResultAC } from '../../redux/formReducer'
import Form from "./form";
import {getIsFetching, getSending, getYear, getMonth, getDay, getSendingStatus, getSendingError} from '../../selectors/formSelectors'

const mapStateToPrps = (state) => {
   return {
      isFetching: getIsFetching(state),
      sending: getSending(state),
      year: getYear(state),
      month: getMonth(state),
      day: getDay(state),
      sendingStatus:getSendingStatus(state),
      sendingError:getSendingError(state),
   }
}

const FormContainer = connect(mapStateToPrps, {isFetchingAC, sendingForm, sendingResultAC})(Form)

export default FormContainer;