export const addPizza = (pizza) => {
  return {
    type: 'ADDPIZZA',
    payload: pizza
  }
}

export const delPizza = (pizza) => {
  return {
    type: 'DELPIZZA',
    payload: pizza
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}