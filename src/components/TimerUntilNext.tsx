import Countdown from "react-countdown"

import { RaceItem } from "./RaceItem"

import { type RaceProps } from "../utils/interfaces"

interface NextRaceProps {
    nextRace: RaceProps
}

export default function TimerUntilNext({ nextRace }: NextRaceProps) {

    const concatDateTime = `${nextRace.date}T${nextRace.time}`;
    const raceDate = new Date(concatDateTime);

    return(
        <div className="next-race-container">
            <div className="timer-container">
                <span>Time Until Next Race</span>
                <div className="countdown">
                    <Countdown date={raceDate} />
                </div>
            </div>
            <RaceItem race={nextRace} isNextRace />
            
        </div>
    )
}