
const Son = ({name,age,isEmployee,salary,hasAttitude,hobbie,address:{place,state},fun}) => {
  return (
    <div>
      <p>girl Name:{name}</p>
      <p>age:{age}</p>
      <p>Employee{isEmployee?"working":"Home maker"}</p>
      <p>salary:{salary==undefined && "not disclosure"}</p>
      <p>hasAttitude:{hasAttitude==null && "not there in my dictionry"}</p>
      <p>hobbies: {hobbbie}</p>
      <p>place:{place}</p>
      <p>state:{state}</p>
      <p>Approval status:{fun()}</p>

    </div>
  )
}

export default Son