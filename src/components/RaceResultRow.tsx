import { type RaceResultProps } from '../utils/interfaces';

export default function RaceResultRow({ result }: { result: RaceResultProps }){

    const constructorName = result.Constructor.constructorId;

    return(
        <>
            <div className={`race-result-row`} key={result.position}>
                <h2>{result.position} - {result.Driver.givenName} {result.Driver.familyName}</h2>
                <p className={`${constructorName}`}>{result.Constructor.name}</p>
                <p>{result.Time ? result.Time.time : 'N/A'}</p>
            </div>
        </>
    )
}