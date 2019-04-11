import React from 'react'

class ChatComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            selectedRoom: {
                id: 1,
                name: "general"
            },
            message: "",
            messages: [{
                user: {
                    id: 0,
                    name: "Elizabeth"
                },
                created_at: "04/11/2019 12:00AM",
                text: "Hello!"
            }, {
                user: {
                    id: 0,
                    name: "Elizabeth"
                },
                created_at: "04/11/2019 12:00AM",
                text: "Hello2!"
            }, {
                user: {
                    id: 0,
                    name: "Jennifer"
                },
                created_at: "04/11/2019 12:05AM",
                text: "Testing a new message..."
            }],
        };
    }

    componentWillMount() {
        setInterval(this.refreshRooms, 10000);
        this.refreshRooms();
    }

    addRoom = () => {
        let roomName = prompt("Please enter a room name", "Harry Potter");
        if (roomName) {
            let params = {
                chat_name: roomName,
            };
            fetch('/chats', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error);
                } else {
                    this.refreshRooms();
                }
            })
        }
    }
    refreshRooms = () => {
        fetch('/all-chats')
        .then(response => response.json())
        .then(response => {
            this.setState({
                rooms: response.rooms
            });
        });
    }

    render() {
        return (<div className="chat">
            <div className="sidebar">
                <div className="profile">
                    <img src="/assets/user.jpg" className="avatar"></img>
                    <div className="name">{this.props.user.name}</div>
                </div>
                <div className="rooms">
                    <div className="title">Rooms:</div>
                    {this.state.rooms.map(room =>
                        <div className="room" key={room.id}># {room.name}</div>
                    )}
                </div>
                <div className="add-room" onClick={this.addRoom}>
                    <i className="fas fa-plus"></i> Add room
                </div>
            </div>
            {this.state.selectedRoom.name ? 
                <div className="board">
                    <div className="title"># {this.state.selectedRoom.name}</div>
                    <div className="messages">
                        {this.state.messages.map((message, idx) =>
                            <div className="message" key={idx}>
                                <img src="/assets/user.jpg" className="avatar"></img>
                                <div className="content">
                                    <div className="metadata">
                                        <div className="username">{message.user.name}</div>
                                        <div className="time">{message.created_at}</div>
                                    </div>
                                    <div className="text">{message.text}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Type your message here!"></input>
                        <div className="button">
                            <i className="fas fa-arrow-circle-right"></i>
                        </div>
                    </div>
                </div>
                : <div className="board"></div>
            }
        </div>);
    }
}

export default ChatComponent