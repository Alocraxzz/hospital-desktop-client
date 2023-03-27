import { FC } from "react";
import { Link } from "react-router-dom";
import { IMedicalRecord } from "../../../types/IMedicalRecord";
import { Table, Tbody, Thead } from "../Table";
import { medicalRecordApi } from "../../../features/rtk-query/services/MedicalRecordService";
import { CustomModal } from "../../customModal/CustomModal";

interface MedicalRecordsProps {
    medicalRecords: IMedicalRecord[] | undefined;
}

const fields = [
    { name: "Id", key: "id" },
    { name: "Patient id", key: "patientId" },
    { name: "Doctor id", key: "doctorId" },
    { name: "Date", key: "date" },
    { name: "Diagnosis", key: "diagnosis" },
    { name: "Prescription", key: "prescription" },
    { name: "Actions", key: "actions" },
]

export const MedicalRecordsTable: FC<MedicalRecordsProps> = ({ medicalRecords }) => {
    const [deleteMedicalRecord] = medicalRecordApi.useDeleteMedicalRecordMutation();

    const handleModalConfirm = (id: number | undefined) => {
        id && deleteMedicalRecord(id);
    };

    return (
        <Table>
            <Thead>
                <tr className="whitespace-nowrap">
                    {fields.map((field) =>
                        <th key={field.key} className="p-3 text-md tracking-wider text-left">{field.name}</th>
                    )}
                </tr>
            </Thead>
            <Tbody>
                {medicalRecords && medicalRecords.length > 0 ? (
                    medicalRecords.map((medicalRecord) => (
                        <tr className="whitespace-nowrap" key={medicalRecord.id}>
                            <td className="p-3 text-md">{medicalRecord.id}</td>
                            <td className="p-3 text-md">{medicalRecord.patientId}</td>
                            <td className="p-3 text-md">{medicalRecord.doctorId}</td>
                            <td className="p-3 text-md">{medicalRecord.date?.toLocaleString()}</td>
                            <td className="p-3 text-md whitespace-pre">{medicalRecord.diagnosis}</td>
                            <td className="p-3 text-md whitespace-pre">{
                                (medicalRecord.prescription && medicalRecord.prescription?.length > 45)
                                    ? medicalRecord.prescription?.substring(0, 45) + "..."
                                    : medicalRecord.prescription
                            }</td>
                            <td className="p-3">
                                <div className="inline-flex">
                                    <Link to={`/medical-records/${medicalRecord.id}`}>
                                        <button className="bg-transparent border border-slate-700 hover:bg-slate-700 py-2 px-4 rounded-l">
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/medical-records/${medicalRecord.id}/edit`}>
                                        <button className="bg-transparent border border-slate-700 hover:bg-slate-700 py-2 px-4">
                                            Edit
                                        </button>
                                    </Link>
                                    <CustomModal
                                        title="Delete medical record?"
                                        content={`Are you sure you want to delete the medical record with ID: ${medicalRecord.id}?`}
                                        openButtonTitle="Delete"
                                        openButtonStyles="bg-transparent border border-slate-700 hover:bg-slate-700 py-2 px-4 rounded-r"
                                        onConfirm={() => handleModalConfirm(medicalRecord.id)}
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