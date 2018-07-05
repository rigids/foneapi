export const SET_PHONE = 'SET_PHONE';


export function setPhone(items, device){
  return{
    type: SET_PHONE,
    items,
    device
  }
}
