const Tailwind = () => {
  return (
  <nav className="h-22 bg-blue-500 flex">
  <aside className="basis-[30%] flex justify-center items-center">
    <h1 className="text-white text-5xl font-medium">Tailwind Css</h1>

  </aside>
  <aside className="basis-[70%] text-white text-2xl font-medium flex justify-end items-center gap-10 pr-10">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>

  </aside>

  </nav>
  )
}

export default Tailwind


