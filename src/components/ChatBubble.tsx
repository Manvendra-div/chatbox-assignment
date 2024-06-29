import { ChatData } from "../interfaces";

export default function ChatBubble({ chat }: { chat: ChatData }) {
  return (
    <div key={chat.id} className={`p-3 w-full flex ${chat.sender.self ? "justify-end" : "justify-start"} space-x-2`}>
      <img src={chat.sender.image} className={`rounded-full w-8 h-8 ${chat.sender.self && "hidden"}`}/>
      <div
        dangerouslySetInnerHTML={{ __html: chat.message }}
        className={`text-justify w-[300px] p-3 ${chat.sender.self ? "rounded-t-xl rounded-bl-xl bg-[#1C63D5]" : "rounded-b-xl rounded-tr-xl bg-[#FFFFFF]"} rounded-bl-xl shadow-lg`}
      />
    </div>
  );
}
