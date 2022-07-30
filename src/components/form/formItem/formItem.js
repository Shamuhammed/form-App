import React, { useState, useEffect } from "react";
import formValidate from "../../../utils/validators";

function FormItem(props) {
   let [name, setNameError] = useState(false);

   const validateName = (name, value) => {
      if (formValidate(name, value) === 0) setNameError(false);
      else setNameError(true);
   }

   const removeEror = (name) => {
      setNameError(false);
   }

   useEffect(() => {
      if (props.submit) validateName(props.name, props.value);
   }, [props.submit])

   return (
      <div className={'form__item ' + ((!name) ? '' : '_error')}>
         <label htmlFor={props.htmlFor} className="label form__label">{`${props.label} * :`}</label>
         {(props.tag === 'textarea')
            ? <textarea
               onBlur={(e) => { validateName(e.target.name, e.target.value); }}
               onClick={(e) => { removeEror(e.target.name) }}
               onChange={(e) => { props.setValue(props.name, e.target.value) }}
               type={props.type}
               id={props.htmlFor}
               name={props.name}
               className="input textarea form__input _req"
               readOnly={props.readOnly ? props.readOnly : false}
               value={props.value}/>
            : <input
               onBlur={(e) => { validateName(e.target.name, e.target.value); }}
               onClick={(e) => { removeEror(e.target.name) }}
               onChange={(e) => { props.setValue(props.name, e.target.value) }}
               type={props.type}
               id={props.htmlFor}
               name={props.name}
               className="input form__input _req"
               readOnly={props.readOnly ? props.readOnly : false}
               value={props.value} />
         }
         <p className="form__instruction">
            {'** ' + props.text}
         </p>
      </div>
   );
}

export default FormItem;