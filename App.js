import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'

    }
    this.updateO = this.updateE.bind(this)
  }
  updateE(e){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt;
    let stateTxt = this.state.txt;
    //https://egghead.io/lessons/react-owner-ownee-relationship
    return (
      <div>
      <Widget txt={this.state.txt} updateQ={this.updateO} />
      <Widget txt={this.state.txt} updateQ={this.updateO} />
      <Widget txt={this.state.txt} updateQ={this.updateO} />
      </div>
    )
    // return (
    //   <div>
    //   <h1>{txt}</h1>
    //   <input type="text"
    //     onChange={this.updateO} />
    //   <b>{stateTxt}</b>
    //   </div>
    // )
  }
}

const Widget = (props)=>{
  return (
    <div>
    <input type="text"
      onChange={props.updateQ} />
    <b>{props.txt}</b>
    </div>
  )
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat:React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt:'default Text'
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);
