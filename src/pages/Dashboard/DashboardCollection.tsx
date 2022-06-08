
import ItemView from "../../components/Dashboard/ItemView"
import Item from "../../components/Dashboard/Item"
import DashboardOptions from "../../components/Dashboard/DashboardOptions";
import Collection from "../../components/Dashboard/Collection";
import SearchInput from "../../components/Dashboard/SearchInput";

const DashboardCollection = () => {
    return (
        <div className="container pt-70">

            <DashboardOptions />
            <div className=" xsm:block sm:block md:block lg:hidden mt-20 ">
                <SearchInput />
            </div>
            <div className='w-full mt-30'>
                <Collection />
            </div>
            {/* <div><ItemView /> </div>
            <div><Item /></div> */}


        </div>
    )
}

export default DashboardCollection;