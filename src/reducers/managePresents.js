export function managePresents(state, action){
  if (action.type === "INCREASE") {
    return { count: state.count + 1}
  }

}
