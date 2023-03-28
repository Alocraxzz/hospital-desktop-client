import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorPage from "./components/error/ErrorPage";
import { store } from "./features/rtk-query/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Provider } from "react-redux";
import { AppointmentInfo } from "./pages/appointments/AppointmentInfo";
import { Appointments } from "./pages/appointments/Appointments";
import { DoctorInfo } from "./pages/doctors/DoctorInfo";
import { Doctors } from "./pages/doctors/Doctors";
import { MedicalRecordInfo } from "./pages/medicalRecords/MedicalRecordInfo";
import { MedicalRecords } from "./pages/medicalRecords/MedicalRecords";
import { PatientInfo } from "./pages/patients/PatientInfo";
import { Patients } from "./pages/patients/Patients";
import { PatientCreatePage } from "./pages/patients/PatientCreatePage";
import { PatientEditPage } from "./pages/patients/PatientEditPage";
import { AppointmentCreatePage } from "./pages/appointments/AppointmentCreatePage";
import { DoctorCreatePage } from "./pages/doctors/DoctorCreatePage";
import { DoctorEditPage } from "./pages/doctors/DoctorEditPage";
import { AppointmentEditPage } from "./pages/appointments/AppointmentEditPage";
import { MedicalRecordCreatePage } from "./pages/medicalRecords/MedicalRecordCreatePage";
import { MedicalRecordEditPage } from "./pages/medicalRecords/MedicalRecordEditPage";
import { RedirectHome } from "./components/error/Redirect";

const router = createBrowserRouter([
    {
        path: "/", element: <Layout/>, errorElement: <RedirectHome />,
        children: [
            { path: "/", element: <App/> },

            { path: "/patients", element: <Patients/> },
            { path: "/patients/:id", element: <PatientInfo/> },
            { path: "/patients/create", element: <PatientCreatePage/> },
            { path: "/patients/:id/edit", element: <PatientEditPage/> },

            { path: "/doctors", element: <Doctors/> },
            { path: "/doctors/:id", element: <DoctorInfo/> },
            { path: "/doctors/create", element: <DoctorCreatePage/> },
            { path: "/doctors/:id/edit", element: <DoctorEditPage/> },

            { path: "/appointments", element: <Appointments/> },
            { path: "/appointments/:id", element: <AppointmentInfo/> },
            { path: "/appointments/create", element: <AppointmentCreatePage/> },
            { path: "/appointments/:id/edit", element: <AppointmentEditPage/> },

            { path: "/medical-records", element: <MedicalRecords/> },
            { path: "/medical-records/:id", element: <MedicalRecordInfo/> },
            { path: "/medical-records/create", element: <MedicalRecordCreatePage/> },
            { path: "/medical-records/:id/edit", element: <MedicalRecordEditPage/> },

            { path: "/error", element: <ErrorPage/> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
);
