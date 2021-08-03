import React, { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const Question = ({ data }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className="faq-item">
            <div>
                <h3>{data.question}</h3>
                {
                    opened ? 
                        <button onClick={() => setOpened(false)}><ArrowDropUpIcon /></button>
                        :
                        <button onClick={() => setOpened(true)}><ArrowDropDownIcon /></button>
                }
            </div>
            <p style={opened ? { display: 'block' } : {display: 'none'}}>{data.answer}</p>
        </div>
    )
}

export default Question
