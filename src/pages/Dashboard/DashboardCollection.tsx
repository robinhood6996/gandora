
import ItemView from "../../components/Dashboard/ItemView"
import Item from "../../components/Dashboard/Item"

const DashboardCollection = () => {
    return (
        <div className="container pt-70">
            <div><ItemView /> </div>
            <div><Item /></div>
        </div>
    )
}

export default DashboardCollection;