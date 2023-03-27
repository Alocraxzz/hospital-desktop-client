import { useParams } from "react-router-dom";
import { AppointmentInfoCard } from "../../components/card/appointment/AppointmentInfoCard";
import { appointmentApi } from "../../features/rtk-query/services/AppointmentService";

export const AppointmentInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: appointment} = appointmentApi.useFetchAppointmentByIdQuery(Number(id));

    return (
        <div>
            {appointment ? (
                <AppointmentInfoCard appointment={appointment}/>
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};