import dayjs from 'dayjs';

import {type RaceProps } from '../utils/interfaces';

interface RaceItem{
    isEnded ?: boolean
    isNextRace ?: boolean
    race: RaceProps
}

export function RaceItem({isEnded, race, isNextRace} : RaceItem){
    return(
        <div className={`race-item ${isEnded ? 'ended' : ''}`} key={race.round}>
            <div className="race-date">
                <span>{dayjs(race.date).format('MMM D')}</span>
            </div>
            <strong>{isNextRace && "Upcoming Race : "} Round {race.round}</strong>
            <h2>{race.raceName}</h2>
            <p>{race.Circuit.circuitName}</p>
        </div>
    )
}