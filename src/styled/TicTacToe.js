import React from 'react'
import {Layer, Line, Text} from 'react-konva'


export const Board = ({unit, size, rows}) => {
    let grid = [];
    //specific Konva css declaration style
    let stroke = 'grey';
    let strokeWidth = 10;

    for (let i = 1; i < rows; i++) {
        //make vertical then horizontal
        let position = unit * i
        //asks for (x,y) of start point and (x,y) endpoint
        grid.push(
            <Line

                points={[position, 0, position, size]}
                stroke={stroke}
                strokeWidth={strokeWidth}
                key={i + 'v'}
            />
        );
        grid.push(
            <Line
                points={[0, position, size, position]}
                stroke={stroke}
                strokeWidth={strokeWidth}
                key={i + 'h'}
            />
        )
    }

    return (
        <Layer>
            {grid}
        </Layer>
    )
};

export const Squares = ({
                            unit,
                            coordinates,
                            gameState,
                            win,
                            gameOver,
                            yourTurn,
                            ownMark,
                            move
                        }) => {

    let squares=coordinates.map((position, index)=>{
        let makeMove = move;
        let mark = gameState[index]; //stores what's in each sq
        let fill = 'black'; //konva text thingy
        if (win && win.includes(index)){
            fill='green'
        }

        //only lets you change a square when it's your move
        if (gameOver || !yourTurn || mark){
            makeMove = () => console.log("It's not your turn")
        }
        return(
            <Text
            key={index}
            index={index}
            x={position[0]}
            y={position[1]}
            fontSize={unit}
            width={unit}
            text={mark}
            fill={fill}
            fontFamily={'Helvetica'}
            align={'center'}
            onClick={(event => {
                let index = event.target.index
                makeMove(index, ownMark)
            })}
            />
        )

    });

    return (
        <Layer>
            {squares}
        </Layer>
    )
}

