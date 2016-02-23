function activeScreen(state = 1, action) {
  switch (action.type) {
    case "changeScreen":
      if (state == 1 && action.data < 0) {
        return state
      }
      state += action.data
      break
    case "goToScreen":
      state = action.data
      break
  }
  return state
}

const REDUCERS = Redux.combineReducers({
  activeScreen
})
