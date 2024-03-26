import Message from "./Message";

const ChatHistory = ({ chatHistory }) => {
    const messages = chatHistory.map(msg => <Message key={msg.timeStamp} message={msg.data} />);
    return (
        <div className="bg-lightcoral p-4 h-full overflow-auto">
            <h2 className="text-black">Chat History</h2>
            {messages}
        </div>
    );
};

export default ChatHistory;
