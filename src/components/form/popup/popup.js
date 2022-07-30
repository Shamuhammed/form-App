import React, { useState, useEffect } from "react";
import PopupError from "./popupError";
import PopupOk from "./popupOk";

function Popup(props) {
//sendingError
//sendingResultAC

   return (
      <div class={"popup" + (props.sendingStatus ? ' open' : '')} id="popup">
         <div class="popup__body">
            {props.sendingError ? <PopupOk sendingResultAC={props.sendingResultAC} /> : <PopupError sendingResultAC={props.sendingResultAC} /> }
         </div>
      </div>
   );
}

export default Popup;