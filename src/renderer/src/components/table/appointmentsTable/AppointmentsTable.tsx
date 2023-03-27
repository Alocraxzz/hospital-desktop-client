import { FC } from "react";
import { Link } from "react-router-dom";
import { IAppointment } from "../../../types/IAppointment";
import { CustomModal } from "../../customModal/CustomModal";
import { Table, Tbody, Thead } from "../Table";
import { appointmentApi } from "../../../features/rtk-query/services/AppointmentService";

interface IAppointmentProps {
    appointments: IAppointment[] | undefined;
}

const fields = [
    { name: "ID" },
    { name: "Patient id" },
    { name: "Doctor id" },
    { name: "Date" },
    { name: "Reason" },
    { name: "Actions" },
];

export const AppointmentsTable: FC<IAppointmentProps> = ({ appointments }) => {
    const [deleteAppointment] = appointmentApi.useDeleteAppointmentMutation();

    const handleModalConfirm = (id: number | undefined) => {
        id && deleteAppointment(id);
    };

    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field, index) =>
                        <th key={index} className="p-3 text-md tracking-wider text-left">{field.name}</th>
                    )}
                </tr>
            </Thead>
            <Tbody>
                {appointments && appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <tr className="bg-transparent whitespace-nowrap" key={appointment.id}>
                            <td className="p-3 text-md">{appointment.id}</td>
                            <td className="p-3 text-md">{appointment.patientId}</td>
                            <td className="p-3 text-md">{appointment.doctorId} </td>
                            <td className="p-3 text-md">{appointment.date?.toLocaleString()}</td>
                            <td className="p-3 text-md whitespace-pre">{
                                (appointment.reason && appointment.reason?.length > 45)
                                    ? appointment.reason?.substring(0, 45) + "..."
                                    : appointment.reason
                            }</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/appointments/${appointment.id}`}>
                                        <button className="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/appointments/${appointment.id}/edit`}>
                                        <button className="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <CustomModal
                                        title="Delete appointment?"
                                        content={`Are you sure you want to delete the appointment with ID: ${appointment.id}?`}
                                        openButtonTitle="Delete"
                                        openButtonStyles="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4 rounded-r"
                                        onConfirm={() => handleModalConfirm(appointment.id)}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className="odd:bg-slate-800 even:bg-slate-800 whitespace-nowrap">
                        <td className="text-center p-3 text-md" colSpan={fields.length}>
                            Nothing was found
                        </td>
                    </tr>
                )}
            </Tbody>
        </Table>
    );
};