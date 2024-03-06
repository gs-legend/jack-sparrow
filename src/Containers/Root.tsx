import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Dashboard";

const Root = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route key="root" path="/" element={<Dashboard />} />
                    <Route key="controlroom" path="controlroom" element={<Dashboard />} />
                    <Route key="submarine" path="/submarine" element={<Dashboard />} />
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