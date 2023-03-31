import { useEffect, useState } from "react";
import { Header } from "../../components/ui/Header";
import { DoctorsTable } from "../../components/table/doctorsTable/DoctorsTable";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Fade } from "../../components/animations/Fade";
import { TableLoad } from "../../components/animations/TableLoad";

export const Doctors = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = doctorApi.useFetchAllDoctorsQuery();
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
                error: 'Fail to load doctors info'
            }
        });

        console.log(error);
    }

    return (
        <div>
            <div className="flex justify-between">
                <Header>Doctors</Header>
                <Link to="/doctors/create">
                    <Button>Create</Button>
                </Link>
            </div>

            {isLoading || !renderComponent ? (
                <Fade>
                    <TableLoad/>
                </Fade>
            ) : (
                <Fade>
                    <DoctorsTable doctors={data}/>
                </Fade>
            )}
        </div>
    );
};