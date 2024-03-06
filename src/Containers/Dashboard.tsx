import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <div className="flex p-1">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard