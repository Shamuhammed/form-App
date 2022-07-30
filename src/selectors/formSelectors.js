export const getAllYears = (state) => state.calendar.allYears;
export const getAllMonths = (state) => state.calendar.allMonths;
export const getAllDays = (state) => state.calendar.allDays;
export const getIsLoading = (state) => state.calendar.isLoading;

export const getIsFetching = (state) => state.form.isFetching;
export const getSending = (state) => state.form.sending;
export const getYear = (state) => state.calendar.year;
export const getMonth = (state) => state.calendar.month;
export const getDay = (state) => state.calendar.day;

export const getSendingStatus = (state) => state.form.sendingResult.status;
export const getSendingError = (state) => state.form.sendingResult.error;