import ItemView from "../../components/Dashboard/ItemView"
import Item from "../../components/Dashboard/Item"
import DashboardBtnGroup from "../../components/Dashboard/DashboardBtnGroup";

const DashboardItem = () => {
    return (
        <div className="container pt-70">
            <div>
                <DashboardBtnGroup />
            </div><div>
                <Item />
            </div>
            {/* <div><ItemView /> </div>
            <div><Item /></div> */}
        </div>
    )
}

export default DashboardItem;