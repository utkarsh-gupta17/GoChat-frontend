
// eslint-disable-next-line react/prop-types
const ChatInput = ({ send }) => (
    <div className="w-full mx-auto">
        <input
            onKeyDown={send}
            className="w-60 md:w-[50rem] py-2 px-2 bg-white text-black text-base border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 h-16"
            placeholder="Enter a message ..."
        />
    </div>
);

export default ChatInput;
