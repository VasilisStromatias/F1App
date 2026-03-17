import dayjs from 'dayjs';

import {type RaceProps } from '../utils/interfaces';
import RaceWeekend from './RaceWeekend';
import { formatTime } from '../utils/helpers';

interface RaceItem{
    isEnded ?: boolean
    isNextRace ?: boolean
    race: RaceProps
}

export interface RaceWeekendTimes {
    FP1: string | undefined
    FP2: string | undefined
    FP3: string | undefined
    Q: string | undefined
    SQ: string | undefined
    S: string | undefined
    R: string | undefined
}

export function RaceItem({isEnded, race, isNextRace} : RaceItem){

    const FP1 = race?.FirstPractice;
    const FP2 = race?.SecondPractice;
    const FP3 = race?.ThirdPractice;
    const Q = race?.Qualifying;
    const SQ = race?.SprintQualifying;
    const S = race?.Sprint;

    const times : RaceWeekendTimes = {
        FP1: FP1 ? formatTime(FP1.time) : undefined,
        FP2: FP2 ? formatTime(FP2.time) : undefined,
        FP3: FP3 ? formatTime(FP3.time) : undefined,
        Q: Q ? formatTime(Q.time) : undefined,
        SQ: SQ ? formatTime(SQ.time) : undefined,
        S: S ? formatTime(S.time) : undefined,
        R: race.time ? formatTime(race.time) : undefined
    }

    let weekendHasSprint : boolean = false;

    if(S && SQ){
        weekendHasSprint = true;
    }

    return(
        <>
        {isNextRace && 
            <div className={`race-item upcoming-race ${weekendHasSprint ?   'sprint-weekend' : ''}`} key={race.round}>
                <div className="race-date">
                    <span>{dayjs(race.date).format('MMM D')}</span>
                </div>
                <div className='race-info'>
                    <strong>Upcoming Race : Round {race.round}</strong>
                    <h2>{race.raceName}</h2>
                    <p>{race.Circuit.circuitName}</p>
                </div>
                <RaceWeekend times={times} />
            </div>
        
        }
        {!isNextRace && 
            <div className={`race-item ${isEnded ? 'ended' : ''} ${weekendHasSprint ?   'sprint-weekend' : ''}`} key={race.round}>
                <div className="race-date">
                    <span>{dayjs(race.date).format('MMM D')}</span>
                </div>
                <strong>Round {race.round}</strong>
                <h2>{race.raceName}</h2>
                <p>{race.Circuit.circuitName}</p>
            </div>
        }
        </>
    )
}