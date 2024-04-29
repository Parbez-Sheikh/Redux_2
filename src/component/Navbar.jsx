import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";


const Navbar = () => {

    const[show,setShow]=useState(false)

    const handleMenu=()=>{
        setShow(!show)
    }


    const items = [
        { label: 'Home', link: '/home' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/services' },
        { label: 'Products', link: '/products' },
        { label: 'Blog', link: '/blog' },
        { label: 'Contact', link: '/contact' }
      ];

    return (
        <div className="bg-red-200 py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-[10%]"> 
                <Link className="text-green-400 text-4xl font-bold" to='/'>Hate</Link>
                </div>
                <div className="w-[70%] hidden md:block">
                    <ul className="flex justify-end gap-4 ">
                        {
                            items.map((item,i)=>{
                                return(
                                    <li key={i}><NavLink className={({ isActive}) => isActive ? "active text-xl font-bold hover:text-2xl text-red-600" : "text-xl hover:text-2xl hover:text-red-600 hover:font-bold"} to={item.link}>{item.label}</NavLink></li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="w-[5%] md:hidden">
                    {
                    show?
                    <FiX onClick={handleMenu} className="text-4xl font-bold text-white" />
                    :
                    <FiMenu onClick={handleMenu} className="text-4xl font-bold text-white" />

                    }
                   
                </div>

            </div>
            {/* ********** */}
            {
                show?
                <div className="w-[40%] bg-slate-500 mx-auto text-center my-3  md:hidden">
                <ul className=" ">
                    {
                        items.map((item,i)=>{
                            return(
                                <li key={i}><NavLink className={({ isActive}) => isActive ? "active text-xl font-bold hover:text-2xl text-red-600" : "text-xl hover:text-2xl hover:text-red-600 hover:font-bold"} to={item.link}>{item.label}</NavLink></li>
                            )
                        })
                    }

                </ul>
            </div>

                :
                <div className="w-[40%] bg-slate-500 hidden">
                <ul className=" ">
                    {
                        items.map((item,i)=>{
                            return(
                                <li key={i}><NavLink className={({ isActive}) => isActive ? "active text-xl font-bold hover:text-2xl text-red-600" : "text-xl hover:text-2xl hover:text-red-600 hover:font-bold"} to={item.link}>{item.label}</NavLink></li>
                            )
                        })
                    }

                </ul>
            </div>

            }
          
              {/* ********** */}

        </div>
    );
};

export default Navbar;

