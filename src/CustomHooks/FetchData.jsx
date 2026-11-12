import useFetch from "./useFetch"


const FetchData = () => {
  let {apiData}=useFetch("https://dummyjson.com/recipes")
  console.log(apiData)
  return <>
  <table border={1} cellPadding={10} rules='all' width="100%">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Cusine</th>
        <th>Ingredients</th>
        <th>Instructions</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {
         apiData?.recipes.map(item)=>{
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.cusine}</td>
            <td>{item.Instruction}</td>
            
            <td> <img src={item.image} alt={item.name} height={200} width={200}/></td>
          </tr>

        }
      }
      
    </tbody>
  </table>
  </>
}

export default FetchData