import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, [navigate]);

    return null;
}