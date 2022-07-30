import React from "react";

function SelectTitle(props) {

   return (
      <div className={"select__title__parent" + (props.className ? (' ' + props.className) : '')}>
         <input className="input select__title year" data-default={props.value} type="text" value={props.value}
            readOnly={true} />
      </div>
   );
}

export default SelectTitle;