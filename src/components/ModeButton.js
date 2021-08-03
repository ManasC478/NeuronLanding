import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const ModeButton = ({ darkMode, setDarkMode }) => {
    return (
        <div id="mode-type">
            {
                darkMode ?
                    <button onClick={() => setDarkMode(false)}><WbSunnyIcon /></button>
                    :
                    <button onClick={() => setDarkMode(true)}><Brightness2Icon /></button>
            }
        </div>
    )
}

export default ModeButton
