function nextScreen() {
  return {
    type: "changeScreen",
    data: 1
  }
}

function prevScreen() {
  return {
    type: "changeScreen",
    data: -1
  }
}
