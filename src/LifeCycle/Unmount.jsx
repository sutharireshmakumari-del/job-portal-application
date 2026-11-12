import  { Component } from 'react'

class Unmount extends Component {
  componentWillUnmount(){
    console.log("componentWillUnmount method is triggered")
  }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}
export default Unmount