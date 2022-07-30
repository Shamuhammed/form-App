import React from "react";

function SelectItem(props) {

   const setNewDate = (e) => {
      props.setDate(props.label);
      e.stopPropagation()      
   }

   return (
      <div className="select__item">
         <input id={"singleSelect" + props.label} className="select__input" type="radio" name="singleSelect"/>
         <label
            onClick={(e) => {
               setNewDate(e)
            }}
            htmlFor={"singleSelect" + props.label}
            className={"select__label" + (props.className ? props.className : '')}>
            {props.label}</label>
      </div>
   );
}

export default SelectItem;