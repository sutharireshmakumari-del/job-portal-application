// import  { Component } from 'react'
// import Unmount from './Unmount'

//  class Phases extends Component {
//   constructor(){
//     super()
//     console.log("Constructor method is triggered")
//     this.state={
//       salary:10000
//     }
//   }
//   componentDidMount(){
//     console.log("componentDidMount method is triggered")
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate method is triggered")
//   }
//   render() {
//     console.log("rendering method is triggered")
//     return (
//       <div>
//         <h1>salary :{this.state.salary}</h1>
//         <button onClick={()=>this.setState({salary:this.state.salary+10000})}>Increment😄</button>
//        {this.state.salary <=40000 && <Unmount/>}
//       </div>
//     )
//   }
// }
// export default Phases