
import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import Progress from './progressbar';

export default function Board() {

    const [period, setPeriod] = useState(0);

    const progress = 70;
    const progress2 = 50;

    const handleClick = (e) => {

        setPeriod(e.target.dataset.id)
    }

    return (
        <div className="board">
            <h1 className='leaderboard'>Current Ongoing Events</h1>

            <div className="duration">
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='30'>30 Days</button>
                <button onClick={handleClick} data-id='0'>All-Time</button>
            </div>

            <div className="progress">
                <Progress progress={80}/>
            </div>

            <div className="progress2">
                <Progress progress={progress2}/>
            </div>


            <div className="progress3">
                <Progress progress={60}/>
            </div>

            <div className="d1">
                <p>
                    Choose any date you like throughout the year. From May, GoSkydive offers jumps
                    on Thursday, Friday, Saturday, Sunday, and Monday. <br/>
                    Side by side, together we can transform lives.
                </p>
            </div>

            <div className="d2">
                <p>
                    Explore the beautiful grounds of St. Giles House with a range of different distances for all
                    abilities as part of the UK Trail Running Festival.
                </p>
            </div>

            <div className="d3">
                <p>
                    An incredible opportunity to experience panoramic views from our deck and soak in the magnificent fireworks. We set sail aboard our vessel <br/> on Poole Quay at 7.30pm prompt so please arrive between 7pm and 7:20pm.
                </p>
            </div>


            <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

        </div>
    )
}


function between(data, between) {
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    });

    // Sort the filtered data by the absolute difference between dates and today
    return filter.sort((a, b) => {
        const dateA = new Date(a.dt);
        const dateB = new Date(b.dt);
        const diffA = Math.abs(dateA - today);
        const diffB = Math.abs(dateB - today);
        return diffA - diffB; // Sort in ascending order based on closest date to today
    });
}
import React from "react";

function Ongoing() {
    return (
        <h1>I'm the onging page</h1>
    );
}

export default Ongoing;