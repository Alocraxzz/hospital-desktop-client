import { useEffect, useState } from "react";
import { PatientsTable } from "../../components/table/patientsTable/PatientsTable";
import { Header } from "../../components/ui/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { Fade } from "../../components/animations/Fade";
import { TableLoad } from "../../components/animations/TableLoad";

export const Patients = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = patientApi.useFetchAllPatientsQuery();
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
                <Header>Patients</Header>
                <Link to="/patients/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isLoading || !renderComponent ? (
                <Fade>
                    <TableLoad />
                </Fade>
            ) : (
                <>
                    {renderComponent && (
                        <Fade>
                            <PatientsTable patients={data}/>
                        </Fade>
                    )}
                </>
            )}
        </div>
    );
};