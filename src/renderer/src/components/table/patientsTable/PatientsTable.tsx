import { FC } from "react";
import { Link } from "react-router-dom";
import { IPatient } from "../../../types/IPatient";
import { Table, Tbody, Thead } from "../Table";
import { CustomModal } from "../../customModal/CustomModal";
import { patientApi } from "../../../features/rtk-query/services/PatientService";

interface IPatientsTableProps {
    patients: IPatient[] | undefined;
}

const fields = [
    { name: "ID", key: "id" },
    { name: "Name", key: "name" },
    { name: "Surname", key: "surname" },
    { name: "Date of birth", key: "dateOfBirth" },
    { name: "Phone number", key: "phoneNumber" },
    { name: "Actions", key: "actions" },
];

export const PatientsTable: FC<IPatientsTableProps> = ({ patients}) => {
    const [deletePatient] = patientApi.useDeletePatientMutation();

    const handleModalConfirm = (id: number | undefined) => {
        id && deletePatient(id);
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
                {patients && patients?.length > 0 ? (
                    patients?.map((patient) => (
                        <tr className="whitespace-nowrap" key={patient.id}>
                            <td className="p-3 text-md">{patient.id}</td>
                            <td className="p-3 text-md">{patient.name}</td>
                            <td className="p-3 text-md">{patient.surname}</td>
                            <td className="p-3 text-md">{patient.dateOfBirth?.toLocaleString()}</td>
                            <td className="p-3 text-md">{patient.phoneNumber}</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/patients/${patient.id}`}>
                                        <button
                                            className="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/patients/${patient.id}/edit`}>
                                        <button className="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <CustomModal
                                        title="Delete patient?"
                                        content={`Are you sure you want to delete the patient with ID: ${patient.id}?`}
                                        openButtonTitle="Delete"
                                        openButtonStyles="bg-transparent border border-slate-700 hover:bg-slate-700 font-bold py-2 px-4 rounded-r"
                                        onConfirm={() => handleModalConfirm(patient.id)}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className="bg-transparent whitespace-nowrap">
                        <td className="text-center p-3 text-md" colSpan={fields.length}>
                            Nothing was found
                        </td>
                    </tr>
                )}
            </Tbody>
        </Table>
    );
};