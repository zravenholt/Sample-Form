export default function (state = null, action) {
  switch (action.type) {
  case 'FORM_THREE_SUBMISSION':
    return action.payload;
    break;
  }
  return state;
}