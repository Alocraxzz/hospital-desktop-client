import { FC } from "react";
import { Link } from "react-router-dom";
import { IDoctor } from "../../../types/IDoctor";
import { Table, Tbody, Thead } from "../Table";
import { CustomModal } from "../../customModal/CustomModal";
import { doctorApi } from "../../../features/rtk-query/services/DoctorService";

interface IDoctorsTableProps {
    doctors: IDoctor[] | undefined;
}

const fields = [
    { name: "ID", key: "id" },
    { name: "Name", key: "name" },
    { name: "Surname", key: "surname" },
    { name: "Speciality", key: "speciality" },
    { name: "Phone number", key: "phoneNumber" },
    { name: "Actions", key: "actions" },
];

export const DoctorsTable: FC<IDoctorsTableProps> = ({ doctors }) => {
    const [deleteDoctor] = doctorApi.useDeleteDoctorMutation();

    const handleModalConfirm = (id: number | undefined) => {
        id && deleteDoctor(id);
    };

    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field) =>
                        <th key={field.key} className="p-3 text-md tracking-wider text-left">{field.name}</th>,
                    )}
                </tr>
            </Thead>
            <Tbody>
                {doctors && doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <tr className="bg-transparent whitespace-nowrap" key={doctor.id}>
                            <td className="p-3 text-md">{doctor.id}</td>
                            <td className="p-3 text-md">{doctor.name}</td>
                            <td className="p-3 text-md">{doctor.surname}</td>
                            <td className="p-3 text-md">{doctor.speciality}</td>
                            <td className="p-3 text-md">{doctor.phoneNumber}</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/doctors/${doctor.id}`}>
                                        <button
                                            className="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/doctors/${doctor.id}/edit`}>
                                        <button className="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <CustomModal
                                        title="Delete doctor?"
                                        content={`Are you sure you want to delete the doctor with ID: ${doctor.id}?`}
                                        openButtonTitle="Delete"
                                        openButtonStyles="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4 rounded-r"
                                        onConfirm={() => handleModalConfirm(doctor.id)}
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