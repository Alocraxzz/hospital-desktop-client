import { useParams } from "react-router-dom";
import { DoctorInfoCard } from "../../components/card/doctor/DoctorInfoCard";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { useEffect } from "react";

export const DoctorInfo = () => {
    const { id } = useParams<{ id: string }>();
    const { data: doctor, refetch } = doctorApi.useFetchDoctorByIdQuery(Number(id));

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div>
            {doctor ? (
                <DoctorInfoCard doctor={doctor} printAdditionalTables={true}/>
            ) : (
                <>Nothing was found</>
            )}
        </div>
    );
};