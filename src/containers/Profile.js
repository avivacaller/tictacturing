import React, {Component} from 'react'
import {
    Container, Name, GameListHeader, GameList, GameRecord,
    Column, ColumnLabels
} from "../styled/Profile"
import Relay from 'react-relay'

class Profile extends Component {

    get Records() {
        let {games} = this.props.user
        return games.map( (game, index) => {
            return (
                <GameRecord
                    key={index}
                    index={index}
                >
                    <Column>
                        {(game.winner)? 'Won!':'Lost'}
                    </Column>
                    <Column>
                        "ROBOT"
                    </Column>
                    <Column>
                        "No"
                    </Column>
                    <Column>
                        {game.createdAt}
                    </Column>
                </GameRecord>
            )
            })
    }

    render() {
        let {email} = this.props.user;
        return (
            <Container>
                <Name>
                    {email}
                </Name>
                <GameList>
                    <GameListHeader>
                        My Games
                    </GameListHeader>

                <ColumnLabels>
                    <Column>
                        Outcome
                    </Column>
                    <Column>
                        Guess
                    </Column>
                    <Column>
                        Guessed Correctly
                    </Column>
                    <Column>
                        Date
                    </Column>
                </ColumnLabels>
                    {this.Records}
                </GameList>
            </Container>
        )
    }
}

Profile.defaultProps = {
    user: {
        email: 'thingy@hotmail.co.uk',
        games: [
            {
                winner: true,
                createdAt: '12/25/2016',
                id: '0001'
            },
            {
                winner: true,
                createdAt: '12/26/2016',
                id: '0002'
            },
            {
                winner: true,
                createdAt: '12/27/2016',
                id: '0003'
            },
        ]
    }
}


export default Profile