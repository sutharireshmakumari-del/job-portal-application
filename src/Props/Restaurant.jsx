const Restaurant = ({title,food = "Chicken biryani",price = 450,children}) => {
  return (
    <div>
      <h1>Name:{title}</h1>
      <h1>Famous for:{food}</h1>
      <h1>Price:{price}</h1>
      {children}
      <hr />
    </div>
  )
}

export default Restaurant;
