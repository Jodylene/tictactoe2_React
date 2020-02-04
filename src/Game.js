import React from 'react';
import {GameTitle} from "./GameTitle";
import GameBoard from "./GameBoard";
import {GameMessage} from "./GameMessage";
import {GameReset} from "./GameReset";

export default class Game extends React.Component {


    constructor(props) {
        super (props);

        this.state ={
            message:"O Begins", // initial message
        };
        this.ChangeMessage=this.ChangeMessage.bind(this); // makes it so function works
    }

    ChangeMessage (message){
        this.setState({message:message}); //function for changing message for who's turn it is
    }


    render() {
        return (
            <div id="game">
                <GameTitle/>
                <GameMessage message={this.state.message}/>
                <GameBoard onChangeMessage={this.ChangeMessage}/>
                <GameReset />
            </div>
        );
    }

}
