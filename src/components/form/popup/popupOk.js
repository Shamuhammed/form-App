import React, { useState, useEffect } from "react";

function PopupOk(props) {

   return (
      <div class="popup__content">
         <a href="#" class="popup__close close-popup" onClick={(e) => { props.sendingResultAC(false, false) }}></a>
         <div class="popup__title">
            Форма успешно отправлена
         </div>
         <div class="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum optio tempora provident ratione voluptatum quidem enim doloribus iusto eos.
         </div>
         <a href="#" class="popup__button" onClick={(e) => { props.sendingResultAC(false, false) }}>
            <span>OK</span>
         </a>
      </div>
   );
}

export default PopupOk;