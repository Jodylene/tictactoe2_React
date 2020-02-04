import React from 'react';
import {GameBoard} from "./GameBoard";


class IncrementCount extends React.Component {

    // prepares the state to work

    constructor(props) {
        super (props);

        this.state ={
            count: 1
        }
    }
    // checks counter after each click
    // makes public function, rather than private
    handleClick = (e) => {
        this.setState ({
            count: this.state.count +1
        });

    }
}

export function UserClick(event) {


}

export default IncrementCount;
