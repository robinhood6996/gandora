import { Link } from "react-router-dom";
import item3 from "../../assets/images/news/item3.png"

const CollectionCard = () => {
    return (
        <Link to="/dashboard/collection/id" className='w-full card-box-shadow border-[0.5px] border-borderdefault flex flex-col rounded-tl-[10px] rounded-tr-[10px]  rounded-bl-[40px] rounded-br-[40px] font-lato'>
            <div className="w-full max-h-[20rem] overflow-y-hidden">
                <img src={item3} alt="" className='w-full' />
            </div>
            <div className='px-3 pb-3 pt-3 w-full flex flex-col'>
                <div className='pb-1 text-center block'>
                    <h1 className='uppercase text-18 text-cloudygrey fonnt-semibold font-lato'>Bearblock</h1>
                    <h4 className='text-11 uppercase text-cloudygrey font-lato pt-1'>created by: <span className='uppercase text-cloudygrey font-lato'>IAMPPOOKK</span> </h4>
                </div>
                <div className="text-left block pb-1">
                    <p className="whitespace-normal text-11 text-cloudygrey font-lato">Honorary Membership was given to people who helped bring awareness to the BAYC project
                        during its pre-sale phrase. These apes are not a part of the 10k Bored Ape Yacht
                        Club collection, and do not have member privileges.
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CollectionCard;