import { FaStar } from "react-icons/fa";
import { CARD_URL } from "../utils/constraints";

const RestoCard = (props) => {
    const { resdata } = props;
    const{cloudinaryImageId,
        aggregatedDiscountInfoV3,
        subHeader,
        name,
        avgRatingString,
        sla,
        slaString,
        cuisines,
        areaName
    }=resdata?.info;


    return (
        <div className="min-h-[45vh] rounded-2xl w-[23%] bg-yellow-300 border-1 border-gray-400 realative flex flex-col gap-1 p-2">
            <div className="h-[24vh] w-[100%] relative rounded-2xl">
                <img
                    className="rounded-2xl relative object-cover h-[100%] w-[100%]"
                    src={ CARD_URL + cloudinaryImageId}
                />
                <h1 className="absolute bottom-0 left-1/4 text-[20px] font-bold text-white">ITEMS AT {aggregatedDiscountInfoV3.subHeader}  </h1>
            </div>
            <h1 className="text-2xl">{name}</h1>
            <div className="flex gap-1 ">
                <div className="h-7 w-7 bg-green-500 rounded-full relative flex items-center justify-center p-1 ">
                    {" "}
                    <FaStar />{" "}
                </div>
                <p className="text-lg ">{avgRatingString}</p>
                <p className="text-lg ml-4">{sla.slaString}</p>
            </div>
            <p className="text-sm">{cuisines.join(" , ")}</p>
            <p className="text-lg">{areaName}</p>
        </div>
    );
};

export default RestoCard;