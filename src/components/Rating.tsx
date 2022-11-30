import React from 'react';
import {ReactComponent as ActiveStar} from '../assets/star.svg'

interface RatingProps {
    activeStars: number,
    totalStars: number
}

const Rating: React.FC<RatingProps> = ({activeStars, totalStars}) => {
    return (
        <div className="flex relative z-10 w-full h-10 border rounded-xl">
            {[...new Array(totalStars)].map((arr, index) => {
                return (
                    <div className="relative w-1/5 h-full">
                        {activeStars <= (index + 1) ?
                            <ActiveStar className="absolute block m-auto" fill="#dedede" height="48" width="48"/>
                            : null}
                        <ActiveStar className="absolute block m-auto" fill="#fff269" height="48"
                                    width={activeStars >= (index + 1) ? '100%' : `${(activeStars % 1) * 100}%`}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Rating;