const Navbar = () => {  
  return (
    <nav className="fixed top-0 left-0 flex w-full z-50 p-4 items-center justify-between shadow-xl bg-gray-800">

      <div className="max-w-5xl w-full mx-auto px-4 flex items-center text-white">

        {/* Left Section: Name */}
        <div className="flex-1">
          <h1 className="text-md">Arjun Saini</h1>
        </div>
        
        {/* Middle Section: Navigation Links */}
        <div className="space-x-4 flex-1 flex justify-center">
          <a href="#hero"><span className="hover:text-blue-300 text-sm">Home</span></a>
          <a href="#bio"><span className="hover:text-blue-300 text-sm">Bio</span></a>
          <a href="#experience"><span className="hover:text-blue-300 text-sm">Experience</span></a>
          <a href="#projects"><span className="hover:text-blue-300 text-sm">Projects</span></a>
          <a href="#music"><span className="hover:text-blue-300 text-sm">Music</span></a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex-1 flex justify-end items-center">
          <a href="https://drive.google.com/file/d/1oAJGKvEY1I5Px-scsR1_hy6cyfo-YQGA/view?usp=sharing">
            <img src="document.png" alt="Resume" className="h-5 w-6 invert"/>
          </a>
          <a href="https://www.linkedin.com/in/arjunjsaini">
            <img src="linkedin.png" alt="LinkedIn" className="h-6 w-6 mx-3 invert"/>
          </a>  
          <a href="mailto:saini.ar@northeastern.edu">
            <img src="email.png" alt="Email" className="h-6 w-6 invert"/>
          </a>
        </div>

      </div>
    </nav>
  )
};

export default Navbar;  