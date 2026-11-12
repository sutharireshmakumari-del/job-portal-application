import  { Component } from 'react'

class User extends Component {
  constructor(){
super()
this.state={
  name :"teja" ,
  age :25
}
  }
  render() {
    return (
      <div>
        <h1> name :{this.state.name}</h1>
        <h1>age :{this.state.age}</h1>
        <button onClick={()=>this.setState({
          name :"aarthi",
          age:30
        })}>Change user</button>
      </div>
    )
  }
}
export default User