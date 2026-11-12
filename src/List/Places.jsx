const Places = ({data}) => {
  return (
    <div>
      {
        data.map((ele)=>{
          return <div key={ele.id}>
            <h1>name:{ele.name}</h1>
            <h1>Location:{ele.loc}</h1>
            <br/>
          </div>

        })
      }
    </div>
  )
}

export default Places