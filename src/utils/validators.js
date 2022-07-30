function formValidate(name, value, error = 0) {

   const forEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
   const forName = /[A-Z]{3,30}\s[A-Z]{3,30}/;
   const forMessage = /^[A-Za-z]+.{10,300}/;
   const forTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
   const forDate = /0*\d{1,2}\.0*\d{1,2}\.\d{4}/;

   switch (name) {
      case 'email':
         if (inputTest(value, forEmail)) {
            error++;
         }
         break;

      case 'name':
         if (inputTest(value, forName)) {
            error++;
         }
         break;

      case 'tel':
         if (inputTest(value, forTel)) {
            error++;
         }
         break;

      case 'date':
         if (inputTest(value, forDate)) {
            error++;
         }
         break;

      case 'message':
         if (inputTest(value, forMessage)) {
            error++;
         }
         break;

      default:
         if (value === '' && name) {
            error++;
         }
         break;
   }
   return error;
}
function inputTest(value, pattern) {
   return !pattern.test(value)
}

export default formValidate;
