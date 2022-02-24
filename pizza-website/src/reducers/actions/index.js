export const addPizza = (pizza, quantity) => {
  return {
    type: 'ADDPIZZA',
    payload: pizza, 
    qty: quantity
  }
}

export const delPizza = (pizza, quantity) => {
  return {
    type: 'DELPIZZA',
    payload: pizza, 
    qty: quantity
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}

