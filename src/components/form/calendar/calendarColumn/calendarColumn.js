import React, { useState } from "react";
import SelectTitle from "../SelectTitle/SelectTitle";
import SelectItem from "./../SelectItem/SelectItem";

function CalendarColumn(props) {
   let [active, setActive] = useState(false);

   const activeList = () => {      
      setActive(!active)
   }

   const AllYearsList = (props.allYears ? props.allYears : props.allMonths).map((elem, index) => {
      return <SelectItem
         label={elem}
         key={index}
         allYears={props.allYears}         
         month={props.month}
         year={props.year}

         setDate={props.setYearAC ? props.setYearAC : props.setMonthAC}
         activeList={ activeList } />
   })

   return (
      <div className="calendar__column">
         <div className="select" data-state={active ? 'active' : ' '} onClick={activeList}>
            <SelectTitle value={props.allYears ? props.year : props.month} />
            <div className="select__content select-content">
               {AllYearsList}
            </div>
         </div>
      </div>
   );
}

export default CalendarColumn;