export default function (state = null, action) {
  switch (action.type) {
  case 'FORM_TWO_SUBMISSION':
    return action.payload;
    break;
  }
  return state;
}