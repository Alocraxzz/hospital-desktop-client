import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppointmentsTable } from "../../components/table/appointmentsTable/AppointmentsTable";
import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";
import { appointmentApi } from "../../features/rtk-query/services/AppointmentService";
import { Fade } from "../../components/animations/Fade";
import { TableLoad } from "../../components/animations/TableLoad";

export const Appointments = () => {
    const navigate = useNavigate();
    const { data: appointments, error, isLoading } = appointmentApi.useFetchAllAppointmentsQuery();
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderComponent(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    if (error) {
        navigate('/error', {
            state: {
                error: 'Fail to load patients info'
            }
        });

        console.log(error);
    }

    return (
        <div>
            <div className="flex justify-between">
                <Header>Appointments</Header>
                <Link to="/appointments/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isLoading || !renderComponent ? (
                <Fade>
                    <TableLoad />
                </Fade>
            ) : (
                <Fade>
                    <AppointmentsTable appointments={appointments}/>
                </Fade>
            )}
        </div>
    );
};