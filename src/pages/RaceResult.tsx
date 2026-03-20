import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getStandings } from "../utils/FetchController";
import { convertToInt } from "../utils/helpers";
import { type RaceResultProps } from "../utils/interfaces";

import RaceResultRow from "../components/RaceResultRow";

export default function RaceResult(){
    const { round } = useParams();

    const {data} =useQuery({
        queryKey: ['raceResult', round],
        queryFn: () => getStandings("results"),
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60, // 1 hour
    })

    const results = round ? data?.MRData.RaceTable.Races[convertToInt(round) - 1].Results : undefined;
    const raceName = round ? data?.MRData.RaceTable.Races[convertToInt(round) - 1].raceName : undefined;

    return(
        <div className="race-result-page">
            <h1>{raceName} - Race Results</h1>
            {results && 
                (
                    <>
                    {results.map((result: RaceResultProps) => (
                        <RaceResultRow result={result} />
                    ))}
                    </>
                )
            }
        </div>
    )
}