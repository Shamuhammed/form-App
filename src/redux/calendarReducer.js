import { getAllYears, getAllDays } from "../utils/calendarUtils";

const YEAR = 'calendarReducer/YEAR';
const MONTH = 'calendarReducer/MONTH';
const DAY = 'calendarReducer/DAY';
const ALLYEARS = 'calendarReducer/ALLYEARS';
const ALLDAYS = 'calendarReducer/ALLDAYS';
const ISlOADING = 'calendarReducer/ISlOADING';

let initialState = {
   allYears: [],
   allMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
   allDays: [],
   year: '2022',
   month: 'January',
   day: 1,
   isLoading: false,
}

const calendarReducer = (state = initialState, action) => {
   switch (action.type) {
      case YEAR:
         return {
            ...state,
            year: action.year
         }

      case MONTH:
         return {
            ...state,
            month: action.month
         }

      case DAY:
         return {
            ...state,
            day: action.day
         }

      case ALLYEARS:
         return {
            ...state,
            allYears: action.allYears
         }

      case ALLDAYS:
         return {
            ...state,
            allDays: action.allDays
         }

      case ISlOADING:
         return {
            ...state,
            isLoading: (!state.isLoading) ? true : false 
         }
      
      default:
         return state;
   }   
 
}

export const setYearAC = (year) => ({type: YEAR, year});
export const setMonthAC = (month) => ({type: MONTH, month});
export const setDayAC = (day) => ({type: DAY, day});
const setAllYearAC = (allYears) => ({type: ALLYEARS, allYears});
export const setAllDayAC = (allDays) => ({type: ALLDAYS, allDays});
const setIsLoadingAC = () => ({type: ISlOADING});

export const setAllYears = (years) => async (dispatch) => {
   dispatch(setIsLoadingAC())
   let allYears = await getAllYears(years);
   if (allYears) {
      dispatch(setAllYearAC(allYears));
      dispatch(setIsLoadingAC());
   }
}

export const setAllDay = (year, month) => async (dispatch) => {
   dispatch(setIsLoadingAC())
   let allDays = await getAllDays(year, month);
   if (allDays) {
      dispatch(setAllDayAC(allDays));
      dispatch(setIsLoadingAC());
   }
}


export default calendarReducer;