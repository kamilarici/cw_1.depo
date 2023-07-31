import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userNameLogin,logout }) => {

  /* 
  // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
   
    console.log(isOpen);

  }, [isOpen]); */

  return (
    <header className={`flex items-center justify-center w-full bg-slate-700`}>
      <div className="container ">
        <div className=" mx-4">
          <div className="flex items-center justify-between w-full px-4 ">
            <div className="max-w-full px-4 w-auto">
              <Link to="/" className="block w-full py-5 text-4xl text-green-600">
              <i class="fa-solid fa-c"></i><span className="text-2xl">ode </span> <i class="fa-solid fa-f"></i><span className="text-2xl">riends group work </span>
              </Link>
            </div>
            {/* <div className="me">
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                  } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#"
                  >
                    Payment
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#"
                  >
                    About
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#"
                  >
                    Blog
                  </ListItem>
                </ul>
              </nav>
            </div> */}
            { 
            !userNameLogin ? 
              <div className="justify-end pr-16 sm:flex lg:pr-0">
                <Link
                  to="/register"
                  className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
                >
                  Sign in
                </Link>

                <Link
                  to="/Login"
                  className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                >
                  Login
                </Link>
              </div> 
              : 
              <div className="justify-end  sm:flex lg:pr-0">
              <span className="py-3 text-base font-medium px-7 hover:text-primary text-green-300">
               {userNameLogin} <i class="fa-regular fa-circle-user"></i>
             </span>
              <Link to="/" onClick={logout} className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90">
                Logout
              </Link>
            </div>
            }
            {/*   <div className="dropdown dropdown-end relative">
              <label 
                tabIndex={0}
                className="btn m-1 "
                onClick={() => setIsOpen(!isOpen)} 
              >
                Click
              </label>
              {isOpen && ( 
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};
