export default function (state = null, action) {
  switch (action.type) {
  case 'FORM_ONE_SUBMISSION':
    console.log('formOneReducer', action.payload); 
    return action.payload;
    break;
  }
  return state;
}