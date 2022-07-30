import React, { useEffect, useState } from "react";
import FormItem from "./formItem/formItem";
import formValidate from "../../utils/validators";
import { getFormJSON } from "../../utils/apiJson";
import CalendarContainer from "./calendar/calendar";
import { getNumberMonth, addNull } from "../../utils/calendarUtils";
import Popup from "./popup/popup";

function Form(props) {

   let [submit, setSubmit] = useState(false);
   // values
   let [nameVal, setNameValue] = useState('');
   let [mailVal, setMailValue] = useState('');
   let [telVal, setTelValue] = useState('');
   let [dateVal, setDateValue] = useState('');
   let [messageVal, setMessageeValue] = useState('');


   useEffect(() => {
      setDateValue(
         `${addNull(props.day)}.${addNull(getNumberMonth(props.month))}.${props.year}`
      )
   },[props.day, props.month, props.year])

   // set values
   const setValue = (name, value) => {
      switch (name) {
         case 'name':
            setNameValue(value.toUpperCase());
            break;

         case 'email':
            setMailValue(value);
            break;

         case 'tel':
            setTelValue(value);
            break;

         case 'message':
            setMessageeValue(value);
            break;
      }
   }

   const handleSubmit = (e) => {
      const values = e.target;
      e.preventDefault();
      let error = 0;
      for (let i = 0; i < values.length; i++) {
         error += formValidate(values[i].name, values[i].value);
      }
      if (error !== 0) setSubmit(true);
      else {
         props.sendingForm(getFormJSON(values))
         setSubmit(false)
         e.target.reset();
      }
   }

   return (
      <> <Popup sendingStatus={props.sendingStatus} sendingError={props.sendingError} sendingResultAC={props.sendingResultAC} />
      <div className={"form" + ((!props.sending) ? '' : ' _sending')}
         onSubmit={(e) => { handleSubmit(e) }}>
         <form action="#" className="form form__body" id="form">
            <h1 className="form__title">
               Form test
            </h1>

            <FormItem
               setValue={setValue}
               submit={submit}
               value={nameVal}
               htmlFor='forName'
               label='Имя Фамилия'
               type='text'
               name='name'
               text='Поле “Имя Фамилия” может состоять только из 2-х слов (имя и фамилия)
               латинского алфавита. Минимальная длина каждого слова 3 символа, максимальная 30. Между словами
               может быть только 1 пробел. При вводе символы должны приводиться в верхний регистр'
            />

            <FormItem
               setValue={setValue}
               submit={submit}
               value={mailVal}
               htmlFor='forEmail'
               label='E-mail'
               type='email'
               name='email'
               text='E-mail должен быть корректным (mymail@mail.com)'
            />

            <FormItem
               setValue={setValue}
               submit={submit}
               value={telVal}
               htmlFor='forTel'
               label='Номер телефона'
               type='tel'
               name='tel'
               text='Для номера телефона использовать маску Российского номера.'
            />

            <CalendarContainer
               formItem={
                  <FormItem
                     setValue={setValue}
                     submit={submit}
                     value={dateVal}
                     readOnly={true}
                     htmlFor='forDate'
                     label='Дата рождения'
                     type='text'
                     name='date'
                     text='Дата рождения вводиться через календарь.'
                  />
               }
            />

            <FormItem
               setValue={setValue}
               submit={submit}
               value={messageVal}
               tag='textarea'
               htmlFor='forMessage'
               label='Сообщение'
               type='tel'
               name='message'
               text='Поле “Сообщение” имеет минимальную длину в 10 символов и максимальную в 300.'
            />
            <button type="submit" className="form__button">Отправить</button>

         </form>
         </div>
         </>
   );
}

export default Form;