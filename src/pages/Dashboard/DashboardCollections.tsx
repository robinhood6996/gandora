
import DashboardBtnGroup from "../../components/Dashboard/DashboardBtnGroup";
import Collection from "../../components/Dashboard/Collection";

const DashboardCollections = () => {
    return (
        <div className="container pt-70">
            <DashboardBtnGroup />
            <Collection />
            {/* <div><ItemView /> </div>
            <div><Item /></div> */}
        </div>
    )
}

export default DashboardCollections;