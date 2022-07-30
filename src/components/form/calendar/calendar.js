import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAllDay, setAllYears, setDayAC, setMonthAC, setYearAC } from '../../../redux/calendarReducer'
import CalendarColumn from "./calendarColumn/calendarColumn";
import SelectItem from "./SelectItem/SelectItem";
import SelectTitle from "./SelectTitle/SelectTitle";
import { getAllYears, getAllMonths, getAllDays, getYear, getMonth, getDay, getIsLoading } from '../../../selectors/formSelectors'

function Calendar(props) {

   const AllDaysList = props.allDays.map((elem, index) => {
      return <SelectItem label={elem} key={index} className=' select__small' setDate={props.setDayAC} />
   })

   useEffect(() => {
      props.setAllYears(props.allYears)
      props.setAllDay(props.year, props.month)
   }, [props.year, props.month])

   return (
      <div className={"form__calendar calendar" + (props.isLoading) ? 'loading' : ''}>
         <div className="calendar__row">
            {props.formItem}
         </div>
         
         <div className="calendar__row">
            <div className="calendar__flex">
               <CalendarColumn
                  allMonths={props.allMonths}
                  year={props.year}
                  month={props.month}
                  setMonthAC={props.setMonthAC} />
               <CalendarColumn
                  allYears={props.allYears}
                  month={props.month}
                  year={props.year}
                  setYearAC={props.setYearAC} />
            </div>
         </div>

         <div className="calendar___days">
            <div className="select select__calendar" data-state="active">
               
                  <SelectTitle value={props.value} className={'select__title__hidden'} month={props.month}/>
                  <div className="calendar__content">
                     <div className="calendar__week">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                     </div>
                     <div className="calendar__days select-content">
                        {AllDaysList}
                     </div>
                  </div>
            
            </div>
         </div>
      
      </div>

   )
}

const mapStateToProps = (state) => {
   return {
      allYears: getAllYears(state),
      allMonths: getAllMonths(state),
      allDays: getAllDays(state),
      year: getYear(state),
      month: getMonth(state),
      day: getDay(state),
      isLoading: getIsLoading(state)
   }
}

const CalendarContainer = connect(mapStateToProps, { setAllDay, setAllYears, setDayAC, setMonthAC, setYearAC })(Calendar)

export default CalendarContainer;