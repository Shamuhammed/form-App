export const getFormJSON = (values) => {
   let data = {}
   for (let i = 0; i < values.length; i++) {
      let value = values[i];
      if (value.name) {
         data[value.name] = value.value; 
      }
   }
   return JSON.stringify(data);
}
