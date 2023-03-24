import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import FirstStep from "./screens/FirstStep";
import SecondStep from "./screens/SecondStep";
import ThirdStep from "./screens/ThirdStep";
import FourthStep from "./screens/FourthStep";
function App() {
    return (
        <>
            <Routes>
                <Route path="/first_step" element={<FirstStep />} />
                <Route path="/second_step" element={<SecondStep />} />
                <Route path="/third_step" element={<ThirdStep />} />
                <Route path="/fourth_step" element={<FourthStep />} />
                <Route
                    path="*"
                    element={<Navigate to="/first_step" replace />}
                />
            </Routes>
        </>
    );
}

export default App;
