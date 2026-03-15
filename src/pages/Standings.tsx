import { useQuery } from "@tanstack/react-query"
import { getStandings } from "../utils/FetchController"

import { type DriverStandingProps, type ConstructorStandingProps } from "../utils/interfaces"

export default function Standings() {

    const {data: driversStandingsData, isLoading: isLoadingDrivers, isError: isErrorDrivers, error: errorDrivers}  = useQuery({
        queryKey: ['standings', 'drivers'],
        queryFn: () => getStandings('driverstandings'),
        staleTime: 1000 * 60 * 60, 
        gcTime: 1000 * 60 * 60, 
    })

    const {data: constructorsStandingsData, isLoading: isLoadingConstructors, isError: isErrorConstructors, error: errorConstructors}  = useQuery({
        queryKey: ['standings', 'constructors'],
        queryFn: () => getStandings('constructorstandings'),
        staleTime: 1000 * 60 * 60, 
        gcTime: 1000 * 60 * 60, 
    })

    const driverStandings = driversStandingsData?.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    const constructorsStandings = constructorsStandingsData?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

    return(
        <div className="standings-container">
            <div className="standings-container-inner">
                <div className="drivers-standings">
                    <h2>Drivers Standings</h2>
                    {isLoadingDrivers && <p>Loading...</p>}
                    {isErrorDrivers && <p>{errorDrivers.message}</p>}
                    {driverStandings && (
                        <>
                        {driverStandings.map((data: DriverStandingProps) => {

                            const constructorId = data.Constructors[0].constructorId;

                            return(
                                <div className={`driver-standing-row ${constructorId}`} key={data.Driver.code}>
                                    <p className="position">{data.position}</p>
                                    <p className="code">{data.Driver.code}</p>
                                    <h3 className={`name ${constructorId}`}>{data.Driver.givenName} {data.Driver.familyName}</h3>
                                    <p className="permanent-number">{data.Driver.permanentNumber}</p>
                                    <p className="points">{data.points} pts</p>
                                </div>
                            )
                        })}
                        </>
                    )}
                </div>
                <div className="constructors-standings">
                    <h2>Constructors Standings</h2>
                    {isLoadingConstructors && <p>Loading...</p>}
                    {isErrorConstructors && <p>{errorConstructors.message}</p>}
                    {constructorsStandings && (
                        <>
                        {constructorsStandings.map((data: ConstructorStandingProps) => {
                            const constructorId = data.Constructor.constructorId;
                            return (
                                <div className={`constructor-standing-row ${constructorId}`} key={constructorId}>
                                    <p className="position">{data.position}</p>
                                    <h3 className={`name ${constructorId}`}>{data.Constructor.name}</h3>
                                    <p className="points">{data.points} pts</p>
                                </div>
                            )
                        })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}