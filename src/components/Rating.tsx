import React from 'react';
import {ReactComponent as ActiveStar} from '../assets/star.svg'

interface RatingProps {
    className: string
    activeStars: number,
    totalStars: number
}

const Rating: React.FC<RatingProps> = ({className, activeStars, totalStars}) => {
    return (
        <div className={className}>
            {[...new Array(totalStars)].map((arr, index) => {
                return (
                    <div className="relative w-5 h-5">
                        {activeStars <= (index + 1) ?
                            <ActiveStar className="absolute block m-auto" fill="#dedede" height="48" width="48"/>
                            : null}
                        <ActiveStar className="absolute block m-auto" fill="#6fbfff" height="48"
                                    width={activeStars >= (index + 1) ? '100%' : `${(activeStars % 1) * 100}%`}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Rating;