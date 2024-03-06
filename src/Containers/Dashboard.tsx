import { Card } from "@/components/Card"
import { Link } from "react-router-dom"
import SubmarineIcon from '@/assets/images/submarine.png';
import ControlCenterIcon from '@/assets/images/control-center.png';

const Dashboard = () => {
    return (
        <div className="flex items-center justify-center w-full h-full gap-8 p-6">
            <Link to={"controlroom"}>
                <Card>
                    <img src={ControlCenterIcon} alt="logo" className='w-24 h-24 p-2 border border-blue-600 rounded-full' />
                    <span className="font-bold text-center text-blue-900">
                        Control Room
                    </span>
                </Card>
            </Link>
            <Link to={"submarine"}>
                <Card>
                    <img src={SubmarineIcon} alt="logo" className='w-24 h-24 p-2 border border-blue-600 rounded-full' />
                    <span className="font-bold text-center text-blue-900">
                        Submarine
                    </span>
                </Card>
            </Link>
        </div>
    )
}

export default Dashboard