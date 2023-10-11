import { Link } from "react-router-dom";


const Projects = () => {
      return (
            <div>
                  <div data-aos="zoom-out-down" data-aos-duration="500">
                  <div className="overflow-y-scroll h-[80vh]">
                  <h3 className="text-xl pb-3 ">My Projects</h3>
                  <div className="  grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white h-fit  px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/QChdV6B/don.png" alt="" />
                              </div>
                              <h2 className="h-12">Donation Campaign </h2>
                              <div className="flex justify-between items-center pt-3 px-3">
                                    <Link target="_blank" to="https://github.com/programming-hero-web-course-4/b8a8-donation-campaign-dipokroydip3"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://rsfd53fgh.netlify.app'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>

                        </div>
                        <div className="bg-white h-fit  px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/5sD1jKw/course-registration.png" alt="" />
                              </div>
                              <h2 className="h-12">Programming course registration </h2>
                              <div className="flex justify-between items-center pt-3 px-3">
                                    <Link target="_blank" to="https://github.com/programming-hero-web-course2/my-course-roster-dipokroydip3"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://dipok-react-assignment.netlify.app/'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>

                        </div>
                        <div className="bg-white h-fit px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/sVHb7v8/summer-sale.png" alt="" />
                              </div>
                              <h2 className="h-12 pt-5">Summer Sale</h2>
                              <div className="flex justify-between  pt-3 items-center px-3">
                                    <Link target="_blank" to="https://github.com/dipokroydip3/85-summer-sale"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://dipokroydip3.github.io/85-summer-sale/'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>
                        </div>
                        <div className="bg-white h-fit px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/3pB2Ypd/biker-jon.png" alt="" />
                              </div>
                              <h2 className="h-12 pt-5">Biker Zoon</h2>
                              <div className="flex justify-between  pt-3 items-center px-3">
                                    <Link target="_blank" to="https://github.com/dipokroydip3/Biker-zone"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://dipokroydip3.github.io/Biker-zone/'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>
                        </div>
                        <div className="bg-white h-fit px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/qkXmTwL/fruits-barst.png" alt="" />
                              </div>
                              <h2 className="h-12 pt-5">Fruits Burst</h2>
                              <div className="flex justify-between  pt-3 items-center px-3">
                                    <Link target="_blank" to="https://github.com/dipokroydip3/B8A3-Fruits-Brust"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://dipokroydip3.github.io/B8A3-Fruits-Brust/#slide1'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>
                        </div>
                        <div className="bg-white h-fit px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/RT3tqgR/teaHouse.png" alt="" />
                              </div>
                              <h2 className="h-12 pt-5">Tea House</h2>
                              <div className="flex justify-between  pt-3 items-center px-3">
                                    <Link target="_blank" to="https://github.com/dipokroydip3/Tea-house"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://dipokroydip3.github.io/Tea-house/'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>
                        </div>
                        <div className="bg-white h-fit px-2 py-5 rounded-md">
                              <div className="">
                                    <img className="" src="https://i.ibb.co/kJcZXQk/penguin-fasion.png" alt="" />
                              </div>
                              <h2 className="h-12 pt-5">Penguin Fashion</h2>
                              <div className="flex justify-between  pt-3 items-center px-3">
                                    <Link target="_blank" to="https://github.com/dipokroydip3/penguin-fashion-with-tailwind"><button className="bg-gray-200 py-1 px-3 rounded">Source</button></Link>
                                    <Link target="_blank" to='https://dipokroydip3.github.io/penguin-fashion-with-tailwind/#'><button className="bg-gray-200 py-1 px-3 rounded">Preview</button></Link>
                              </div>
                        </div>


                  </div>
            </div>
            </div>
            </div>
      );
};

export default Projects;