
import { BsFillShareFill } from "react-icons/bs";
import blog4 from "../../assets/images/blogs/blog4.png"
import ItemBox from "./ItemBox";

const ItemView = () => {

    const styleBorder = "border-r-[0.5px] border-cloud";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-40 pb-30  border-b border-dashed border-[#cdcdcd]">
            <div className="flex items-center md:items-start">
                <div className="overflow-hidden self-baseline w-120 h-120 md:w-210 md:h-210 rounded-full">
                    <img src={blog4} alt="nft" className="w-full h-auto rounded-full" />
                </div>
                <div className="pl-20">
                    <div>
                        <h1 className="text-25 text-davygrey flex items-center">Bearblockclub <span className="ml-8 cursor-pointer text-16 text-davygrey"><BsFillShareFill /></span></h1>
                        <p className="text-17 text-[#4E4D4D]">@bearblockgrando</p>
                    </div>
                    <div className="block md:hidden pt-2">
                    <button className={`ml-auto   px-2 py-[5px]  rounded-[5px] w-[155px] flex  justify-center items-center uppercase text-[14px] font-Rajdhani font-semibold text-white bg-default `}>Add item</button>
                    </div>
                    <div className="pt-1 hidden md:block">
                        <p className="text-17 text-davygrey">About</p>
                        <p className="text-15 text-cloudygrey whitespace-normal">Honorary Membership was given to people who helped bring awareness to the BAYC project during its pre-sale phrase. These apes are not a part of the 10k Bored Ape Yacht Club collection, and do not have member privileges.</p>
                    </div>

                </div>
            </div>

{/* Mobile view */}
<div className="block md:hidden">
<div className="pt-3">
                        <p className="text-17 text-davygrey">About</p>
                        <p className="text-15 text-cloudygrey whitespace-normal">Honorary Membership was given to people who helped bring awareness to the BAYC project during its pre-sale phrase. These apes are not a part of the 10k Bored Ape Yacht Club collection, and do not have member privileges.</p>
                    </div>
</div>

            <div className="">
                <div className="pb-4 hidden md:block">
                    <button className={`ml-auto   px-2 py-[5px]  rounded-[5px] w-[155px] flex  justify-center items-center uppercase text-[14px] font-Rajdhani font-semibold text-white bg-default `}>Add item</button>
                </div>
                <div className="">
                    <p className="text-17 text-davygrey pt-2 md:pt-0">stat</p>
                    <div className="grid grid-cols-4 rounded-sm collection-border">
                        <ItemBox amount={100} title={"items"} adiClass={styleBorder} />
                        <ItemBox amount={32} title={"owners"} adiClass={styleBorder} />
                        <ItemBox amount={50} title={"floor price"} adiClass={styleBorder} />
                        <ItemBox amount={"1.8k"} title={"volume traded"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemView;