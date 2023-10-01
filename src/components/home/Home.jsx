import { Link } from "react-router-dom";




const Home = () => {
      return (
            <div>

                  <div className="lg:mt- col-span-2 h-[80vh] lg:pl-10">
                        <h2 className="text-5xl font-semibold text-center py-10"><i>About Me</i></h2>
                        <p className="text-[1.2rem]">Hi, my name is</p>
                        <h3 className="text-3xl font-semibold">Dipak Roy</h3>
                        <p className="py-5  text-[1.2rem]">I am a web developer. Especially has a lot of skills and knowledge on HTML 5, CSS 3, Bootstrap, Tailwind CSS, JavaScript, React, MongoDB. I am very good at JavaScript based web development such as: - MERN Stack (MongoDB, Express.js, React, Node.js)</p>

                        <div className="pb-5">
                              <Link>
                                    <button className="px-5 rounded py-2 bg-white hover:bg-gray-100 hover">RESUME<i className='bx bxs-download'></i></button>
                              </Link>
                        </div>

                  </div>

            </div>
      );
};

export default Home;