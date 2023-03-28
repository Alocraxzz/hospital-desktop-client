import { useNavigate, useParams } from "react-router-dom";
import { PatientInfoCard } from "../../components/card/patient/PatientInfoCard";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { useEffect } from "react";
import { Fade } from "../../components/animations/Fade";

export const PatientInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: patient, isLoading, isError, refetch } = patientApi.useFetchPatientByIdQuery(Number(id));

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isError) {
        navigate('/error', {
            state: {
                error: 'Fail to load patient info'
            }
        });
    }

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : patient ? (
                <Fade>
                    <PatientInfoCard patient={patient} printAdditionalTables={true}/>
                </Fade>
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};
