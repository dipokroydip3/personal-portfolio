import { NavLink, } from "react-router-dom";
import "../mySelf/Myself.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MySelf = () => {
      return (
            <div>
                  <div data-aos="fade-down-right" data-aos-duration="1000">
                        
                  <div className="bg-white border-2 flex flex-col  xl:h-[83vh] justify-center items-center rounded-xl py-5">
                        <div className="overflow-hidden">
                              <img className="rounded-full object-cover hover:p-0 p-3 transition-all duration-300 w-full h-full md:h-[200px md:w-[200px] xl:w-[270px] xl:h-[270px]" src="https://i.ibb.co.com/fz0S0ygP/Whats-App-Image-2025-04-22-at-00-44-01-692ed09c.jpg" alt="" />

                        </div>

                        <div className="{active} flex flex-col text-center  gap-2 mt-3">
                              <NavLink className="py-1 px-4 rounded-sm hover:bg-gray-200" to={"/"}>Home</NavLink>
                              <NavLink className="py-1 px-4 rounded-sm hover:bg-gray-200" to={"/skills"}>Skills</NavLink>
                              <NavLink className="py-1 px-4 rounded-sm hover:bg-gray-200" to={"/projects"}>Projects</NavLink>
                              <NavLink className="py-1 px-4 rounded-sm hover:bg-gray-200" to={"/contact"}>Contact</NavLink>
                        </div>
                  </div>
                  </div>
            </div>
      );
};

export default MySelf;