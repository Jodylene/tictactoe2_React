import React from 'react';

/* this handles the clicking and counter */
class GameBoard extends React.Component {
    // prepares the state to work

    constructor(props) {
        super (props);

        this.state={
            count: 1,
            array: [1,2,3,4,5,6,7,8,9] // sets up array for each box
        }
    }


    // makes public function, rather than private
    handleClick = (e) => {

        if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
           // does nothing (makes sure this doesn't overwrite the plays
        }
        else {
            // sets counter
            this.setState ({
                count: this.state.count +1
            });

            // for X
            if (this.state.count % 2 === 0) {
                e.target.innerHTML = "X";
                this.props.onChangeMessage("O's Turn"); // called function from parent


                // checks if x's are in the cells (location)
                if(e.target.id === "box1"){
                    this.state.array[0] = e.target;
                }
                else if (e.target.id === "box2"){
                    this.state.array[1] = e.target;
                }
                else if (e.target.id === "box3"){
                    this.state.array[2] = e.target;
                }
                else if (e.target.id === "box4"){
                    this.state.array[3] = e.target;
                }
                else if (e.target.id === "box5"){
                    this.state.array[4] = e.target;
                }
                else if (e.target.id === "box6"){
                    this.state.array[5] = e.target;
                }
                else if (e.target.id === "box7"){
                    this.state.array[6] = e.target;
                }
                else if (e.target.id === "box8"){
                    this.state.array[7] = e.target;
                }
                else if (e.target.id === "box9"){
                    this.state.array[8] = e.target;
                }


            }
            // for O
            else if (this.state.counter % 2 !== 0) {
                e.target.innerHTML ="O";
                this.props.onChangeMessage("X's Turn"); // called function from parent

                // checks if O's are in the cells (location)
                if(e.target.id === "box1"){
                    this.state.array[0] = e.target;
                }
                else if (e.target.id === "box2"){
                    this.state.array[1] = e.target;
                }
                else if (e.target.id === "box3"){
                    this.state.array[2] = e.target;
                }
                else if (e.target.id === "box4"){
                    this.state.array[3] = e.target;
                }
                else if (e.target.id === "box5"){
                    this.state.array[4] = e.target;
                }
                else if (e.target.id === "box6"){
                    this.state.array[5] = e.target;
                }
                else if (e.target.id === "box7"){
                    this.state.array[6] = e.target;
                }
                else if (e.target.id === "box8"){
                    this.state.array[7] = e.target;
                }
                else if (e.target.id === "box9"){
                    this.state.array[8] = e.target;
                }

            }

            // Checks win conditions!
            if (this.state.array[0].innerHTML === "X" && this.state.array[1].innerHTML === "X"
                && this.state.array[2].innerHTML === "X" || this.state.array[0].innerHTML === "O" &&
                this.state.array[1].innerHTML === "O" && this.state.array[2].innerHTML === "O") {

                // changes message
                if (this.state.counter % 2 !== 0) {
                    e.target.innerHTML = "O";
                    this.props.onChangeMessage("O Wins!");
                }
                else if (this.state.counter % 2 === 0){
                    e.target.innerHTML = "X";
                    this.props.onChangeMessage("X Wins!");
                }
            }
        }

    }

    /* this is the game cells */
    render () {
    return (
        <header id="gameBoard">
            <table align="center">
                <tr>
                    { /* row 1 */ }
                    <td onClick={this.handleClick} id="box1">?</td>
                    <td onClick={this.handleClick} id="box2">?</td>
                    <td onClick={this.handleClick} id="box3">?</td>
                </tr>

                <tr>
                    { /* row 2 */ }
                    <td onClick={this.handleClick} id="box4">?</td>
                    <td onClick={this.handleClick} id="box5">?</td>
                    <td onClick={this.handleClick} id="box6">?</td>
                </tr>

                <tr>
                    { /* row 3 */ }
                    <td onClick={this.handleClick} id="box7">?</td>
                    <td onClick={this.handleClick} id="box8">?</td>
                    <td onClick={this.handleClick} id="box9">?</td>
                </tr>


            </table>

        </header>   )
    }

    };




export default GameBoard;

