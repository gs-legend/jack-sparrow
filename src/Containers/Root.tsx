import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "@/components/NotFound";
import Header from "@/components/Header";
import Dashboard from "./Dashboard";
import ControlRoom from "./ControlRoom";
import SubmarineContainer from "./SubmarineContainer";

const Root = () => {
    return (
        <div className='w-full h-full'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route key="root" path="/" element={<Dashboard />} />
                    <Route key="controlroom" path="controlroom" element={<ControlRoom />} />
                    <Route key="submarine" path="submarine" element={<SubmarineContainer />} />
                    <Route key="unknown" path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light" />
        </div>
    )
}

export default Root