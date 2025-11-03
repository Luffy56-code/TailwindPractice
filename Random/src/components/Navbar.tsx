
const Navbar = () => {
  return (
    <div className='h-14 fixed top-0 right-0 left-0 flex bg-card/70 items-center'>
        <div className="w-5xl mx-auto flex justify-between">
          <div>
            <a className="flex items-center">
              <h2 className="text-lg font-bold">AskMyNotes</h2>
            </a>
          </div>
          <div className="flex justify-around items-center gap-4">
            <button className="bg-accent rounded-sm px-3 py-1">Login</button>
            <button className="bg-accent rounded-sm px-3 py-1">Signup</button>
          </div>
        </div>
    </div>
  ) 
}

export default Navbar
