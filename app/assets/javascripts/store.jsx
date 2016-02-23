function ReduxDevToolsMiddleware() {
  var ext = "devToolsExtension"
  return (window[ext] ? window[ext]() : f => f);
}

var createStore = Redux.compose(
   ReduxDevToolsMiddleware()
)(Redux.createStore);

const STORE = createStore(REDUCERS)
