import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import MySelf from "../mySelf/MySelf";


const Root = () => {
      return (
            <div className="h-[80vh]">
                  <Header></Header>
                  <div className="grid md:gap-5 lg:gap-5 lg:grid-cols-3  w-9/12 m-auto mt-5">
                        <div className=" col-span-3 lg:col-span-1"><MySelf></MySelf></div>
                        <div className="col-span-2 mt-7 md:mt-0"><Outlet></Outlet></div>
                  </div>

            </div>
      );
};

export default Root;