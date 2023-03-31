import { useEffect, useState } from "react";
import { MedicalRecordsTable } from "../../components/table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../components/ui/Header";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Fade } from "../../components/animations/Fade";
import { TableLoad } from "../../components/animations/TableLoad";

export const MedicalRecords = () => {
    const navigate = useNavigate();
    const { data: medicalRecords, error, isLoading } = medicalRecordApi.useFetchAllMedicalRecordsQuery();
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
                error: 'Fail to load medical records info'
            }
        });

        console.log(error);
    }

    return (
        <div>
            <div className="flex justify-between">
                <Header>Medical records</Header>
                <Link to="/medical-records/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isLoading || !renderComponent ? (
                <Fade>
                    <TableLoad/>
                </Fade>
            ) : (
                <Fade>
                    <MedicalRecordsTable medicalRecords={medicalRecords}/>
                </Fade>
            )}
        </div>
    );
};