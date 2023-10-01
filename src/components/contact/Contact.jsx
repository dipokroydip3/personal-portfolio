import { Link } from "react-router-dom";


const Contact = () => {
      return (
            <div className="">
                  <h2 className="text-center text-4xl font-semibold">Contact Me</h2>
                  <div className="lg:w-7/12 m-auto mt-10">
                        <input className=" w-full rounded py-1 px-2 outline-none" type="text" placeholder="Name" /> <br />
                        <input className=" w-full rounded py-1 px-2 mt-3 outline-none" type="email" placeholder="Email" /> <br />
                        <textarea className=" rounded mt-3 w-full outline-none px-2" name="" id="" cols="30" rows="5" placeholder="Text message"></textarea>
                        <Link target="_blank" to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                              <button className="border-double bg-white block m-auto py-1 px-3 rounded mt-2">Submit</button>
                        </Link>
                  </div>
                  <div className="flex justify-center mt-2 lg:mt-10 items-center gap-5 md-gap-10 lg:gap-20 ">
                        <Link target="_blank" to="https://mail.google.com/mail/u/0/#inbox?compose=new"><img className="w-9 " src="https://i.ibb.co/x17xZZd/pngegg.png" alt="" /></Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/dipakroy3/"><img className="w-8  " src="https://i.ibb.co/mzJNp2w/linkedin.png" alt="" /></Link>
                        <Link target="_blank" to="https://twitter.com/DipokRoyDip7"><img className="w-8  " src="https://i.ibb.co/YpsfRQZ/twitter.png" alt="" /></Link>
                        <Link target="_blank" to="https://www.instagram.com/dipok.roy.7568596/?hl=en"><img className="w-7 " src="https://i.ibb.co/BqRPZVk/instagram.png" alt="" /></Link>
                        <Link target="_blank" to="https://www.facebook.com/dipok.roy.7568596"><img className="w-8 " src="https://i.ibb.co/kQtzLZD/facebook.png" alt="" /></Link>
                  </div>

                  {/* <Link target="_blank" to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                        <button className="bg-white">click me</button>
                  </Link> */}
            </div>
      );
};

export default Contact;