export default function (state = null, action) {
  switch (action.type) {
  case 'GRAB_ID':
    return action.payload;
    break;
  }
  return state;
}