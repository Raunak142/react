import React from "react";
import RestoCard from "./RestoCard";
import Reslist from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [listofRestro,setlistofRestro]=useState(Reslist);

    return (
        //Body container
        <div className="min-h[100vh] bg-pink-300 px-25 py-10">
            {/* search-bar */}
            <div className="h-[10vh] bg-blue-300 flex gap-5 items-center">
                <h1>searcch</h1>
                <button   onClick={()=>{
                    const filterlist=listofRestro.filter((res)=>res.info.avgRating>4);
                    setlistofRestro(filterlist);
                }}
                className="border-1 border-green-900 py-2 px-3 rounded-2xl bg-green-400 cursor-pointer"><p>Top rated Restro</p></button>
            </div>

            {/* restaurant container */}
            <div className="min-h-[80vh] bg-green-300 mt-10 py-2 px-4  flex flex-wrap  gap-6 ">
                {/* restro-cards */}
                {listofRestro.map((restaurant)=>(
                    <RestoCard  key={restaurant.info.id} resdata={restaurant} />
                ))}
 
            </div>
        </div>
    );
};

export default Body;