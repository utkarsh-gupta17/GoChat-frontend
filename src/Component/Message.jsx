import { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/prop-types
            message: JSON.parse(this.props.message)
        };
    }

    render() {
        const { body, isMe } = this.state.message;
        return (
            <div className={`bg-lightBlue-200 ${isMe ? 'text-purple-600' : 'text-gray-900'} rounded-lg shadow-md p-4 mx-auto my-4 w-4/5 lg:w-2/3 ${isMe ? 'float-right' : 'clear-both'}`}>
                {body}
            </div>
        );
    }
}

export default Message;
