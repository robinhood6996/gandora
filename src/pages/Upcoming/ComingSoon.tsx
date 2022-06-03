import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import ComingYellow from './ComingYellow';
import StayTuned from './StayTuned';

const ComingSoon = () => {

    const [randomNumber, setRandomNumber] = useState(0);
    const location = useLocation();

    useEffect(() => {
        let numberRand = Math.ceil(Math.random() * 100);
        setRandomNumber(numberRand);
        console.log(numberRand);
    }, [location])

    if (randomNumber > 0 && randomNumber < 30) {
        return <StayTuned />
    } else if (randomNumber > 30 && randomNumber < 60) {
        return <ComingYellow />
 
    } else {
        return <StayTuned />
    }
};

export default ComingSoon;