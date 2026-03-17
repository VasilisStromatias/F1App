import { formatTime } from '../utils/helpers';

import { type RaceWeekendTimes } from './RaceItem';


export default function RaceWeekend({ times }: { times: RaceWeekendTimes }) {
        return(
            <div className='race-weekend'>
                    <div className='Friday race-session-box'>
                        <h3>Friday</h3>
                        <div className="race-sessions">
                            <div className="race-session">
                                <span>FP1</span>
                                <p>{formatTime(times.FP1)}</p>
                            </div>
                            <div className="race-session">
                                <span>{times.SQ ? 'Sprint Qualifying' : 'FP2'}</span>
                                <p>{times.SQ ? formatTime(times.SQ) : formatTime(times.FP2)}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='Saturday race-session-box'>
                        <h3>Saturday</h3>
                        <div className="race-sessions">
                            <div className="race-session">
                                <span>{times.S ? 'Sprint' : 'FP3'}</span>
                                <p>{times.S ? formatTime(times.S) : formatTime(times.FP3)}</p>
                            </div>
                            <div className="race-session">
                                <span>Qualifying</span>
                                <p>{formatTime(times.Q)}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='Sunday race-session-box race-day'>
                        <h3>Sunday</h3>
                        <div className="race-sessions">
                            <div className="race-session">
                                <span>Race</span>
                                <p>{formatTime(times.R)}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
}