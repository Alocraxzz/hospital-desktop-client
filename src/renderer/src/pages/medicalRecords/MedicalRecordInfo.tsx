import { useParams } from "react-router-dom";
import { MedicalRecordInfoCard } from "../../components/card/medicalRecord/MedicalRecordsInfoCard";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";

export const MedicalRecordInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: medicalRecord } = medicalRecordApi.useFetchMedicalRecordByIdQuery(Number(id));

    return (
        <div>
            {medicalRecord ? (
                <MedicalRecordInfoCard medicalRecord={medicalRecord}/>
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};