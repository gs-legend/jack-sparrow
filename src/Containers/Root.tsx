import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "@/components/NotFound";
import ControlRoom from "./ControlRoom";
import Submarine from "./Submarine";

const Root = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route key="root" path="/" element={<Dashboard />}>
                        <Route key="controlroom" path="controlroom" element={<ControlRoom />} />
                        <Route key="submarine" path="submarine" element={<Submarine />} />
                    </Route>
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
        </ErrorBoundary>
    )
}

export default Root