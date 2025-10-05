import { LOGO_URL } from "../utils/constraints";

const Header = () => {
    return (
        //header
        <div className=" bg-amber-300 flex justify-between items-center px-25 py-10 h-[10vh]">
            {/* logo */}
            <div className="bg-red-500 h-[10vh] relative pt-1 ">
                <img className="h-[100%]" src={LOGO_URL}></img>
            </div>

            {/* nav items */}
            <div className="flex gap-10">
                <p className="text-2xl font-semibold">Home</p>
                <p className="text-2xl font-semibold">About </p>
                <p className="text-2xl font-semibold">Contact </p>
                <p className="text-2xl font-semibold">Cart</p>
            </div>
        </div>
    );
};

export default Header;