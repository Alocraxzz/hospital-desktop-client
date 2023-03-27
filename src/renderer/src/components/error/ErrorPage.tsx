import React, { useEffect } from "react";
import { Link, useLocation, useRouteError } from "react-router-dom";
import { Header } from "../ui/Header";
import { Button } from "../ui/Button";

interface ErrorPageProps {
}

export default function ErrorPage(props: ErrorPageProps): JSX.Element {
    const routeError: any = useRouteError();
    const { state } = useLocation();
    const { error } = state;

    useEffect(() => {
        console.log(routeError);
    }, [routeError]);

    return (
        <div>
            <Link to="/">
                <Button>Back home</Button>
            </Link>
            <div id="routeError-page" className="flex items-center bg-slate-900 text-slate-300 font-sans">
                <div className="mx-auto text-center">
                    <h1 className="text-6xl my-4">Oops!</h1>
                    {routeError &&
                        <>
                            <p className="text-xl my-4">Sorry, an unexpected routeError has occurred.</p>
                            <p>{routeError.data}.</p>
                            <p>Status: {routeError.status}.</p>
                        </>
                    }
                    {error &&
                        <p className="text-xl my-4">{error}.</p>
                    }
                </div>
            </div>
        </div>
    );
} 