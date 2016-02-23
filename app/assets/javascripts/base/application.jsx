class Application extends React.Component {
  render () {
    let {dispatch} = this.props
      return <div>
        <button onClick={() => dispatch(nextScreen())}>Next</button>
        <button onClick={() => dispatch(prevScreen())}>Prev</button>
      </div>
  }
}

Application = ReactRedux.connect(state => state)(Application);
