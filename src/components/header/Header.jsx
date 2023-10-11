import { Link } from "react-router-dom";


const Header = () => {
      return (
            <div>
                  <div data-aos="flip-left" data-aos-duration="2000">
                  <nav className="flex py-2 px-5 rounded-xl mt-5 bg-white items-center justify-between w-9/12 m-auto">
                       <div className="w-fit m-auto md:w-full">
                              <h1 className="text-xl">Dipak Roy</h1>
                        </div> 
                        <div className="hidden md:flex  items-center gap-5">
                              <Link target="_blank" to="https://github.com/dipokroydip3?tab=repositories"><img className="w-10 " src="https://i.ibb.co/RTM25L3/github.png" alt="" /></Link>
                              <Link target="_blank" to="https://www.linkedin.com/in/dipakroy3/"><img className="w-8  " src="https://i.ibb.co/mzJNp2w/linkedin.png" alt="" /></Link>
                              <Link target="_blank" to="https://twitter.com/DipokRoyDip7"><img className="w-8  " src="https://i.ibb.co/YpsfRQZ/twitter.png" alt="" /></Link>
                              <Link target="_blank" to="https://www.instagram.com/dipok.roy.7568596/?hl=en"><img className="w-7 " src="https://i.ibb.co/BqRPZVk/instagram.png" alt="" /></Link>
                        </div>
                  </nav>
                  </div>
            </div>
      );
};

export default Header;