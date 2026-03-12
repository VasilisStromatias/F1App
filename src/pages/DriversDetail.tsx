import { useParams } from "react-router-dom"

export default function DriversDetail() {

    const params = useParams();

    return(
        <>
            <h1>Drivers Detail</h1>
            <span>{params.driverId}</span>
        </>
    )
}