import { useQuery } from "@tanstack/react-query";
import { getRaces } from "../utils/FetchController";
import TimerUntilNext from "../components/TimerUntilNext";
import { RaceItem } from "../components/RaceItem";
import { type RaceProps } from "../utils/interfaces";

export default function Home() {

    const { data , isLoading, error, isError} = useQuery({
        queryKey: ['races'],
        queryFn: getRaces,
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60, // 1 hour
    });

    const raceData = data?.MRData.RaceTable.Races;
    const dateNow = new Date();
    const nextRace = raceData?.find((race : RaceProps) => new Date(`${race.date}T${race.time}`) > dateNow);

    return(
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            {data && (
                <div className="home-container">
                    <TimerUntilNext nextRace={nextRace} />    
                    <h1>Races</h1>
                    <div className="race-list">
                        {raceData.map((race : RaceProps) => {
                            const concatDateTime = `${race.date}T${race.time}`;
                            const isEnded = new Date(concatDateTime) < dateNow;

                            return(
                            <RaceItem isEnded={isEnded} race={race} key={race.round} />
                        )}
                    )}
                    </div>
                </div>
            )}
        </>
    )
}