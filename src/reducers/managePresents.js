export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      return { number: state.numberOfPresents + 1}
    case "DECREASE":
      return { count: state.numberOfPresents - 1}
      default:
        return state;
  }

}
