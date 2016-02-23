class Root extends React.Component {
  render() {
    let {Provider} = ReactRedux
    return <Provider store={STORE}><Application /></Provider>
  }
}
