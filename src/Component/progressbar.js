
import React from 'react';

function ProgressBar({ progress,progressPosition}) {
    return (
        <div style={progressPosition}>
            <progress value={progress} max="100"></progress>
        </div>
    );
}

export default ProgressBar;