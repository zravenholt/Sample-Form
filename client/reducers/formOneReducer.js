export default function (state = null, action) {
  switch (action.type) {
  case 'FORM_ONE_SUBMISSION':
    return action.payload;
    break;
  }
  return state;
}