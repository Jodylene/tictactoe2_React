import React from 'react';
import './App.css'


    export function GameReset() {
        return (
            // reloads the page
            <button onClick={() => window.location.reload(false)}>New Game
            </button>
        );

}
