import son from './Son'

const Mother = () => {
  let approval =()=>{
    return "Ready for marriage"
  }
  return <>
  <Son name="Swathi" age={23}isEmployee={true} salary={undefined} hasAttitude={null} hobbie={["coocking","dancing","teaching"]} address={{place: "hyderabad",state:"Telangana"}} fun ={approval}/>.
  </>
}

export default Mother