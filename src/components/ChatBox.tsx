import axios from "axios";
import { useState, useEffect } from "react";
import { ChatData } from "../interfaces";
import ChatBubble from "./ChatBubble";
import { formatDate } from "../utils";

export default function ChatBox() {
  const [chats, setChats] = useState<ChatData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getChats = async (pageNumber: number) => {
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${pageNumber}`);
      if (response.data.chats.length === 0) {
        setHasMore(false);
      } else {
        setChats((prevChats) => [...prevChats,...response.data.chats]);
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    getChats(page);
  }, [page]);

  const handleScroll = async (event: any) => {
    if (event.target.scrollTop < 300 && !loading && hasMore) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full h-full min-h-[500px] overflow-y-scroll"
      onScroll={handleScroll}
    >
      <div className="relative bg-[#B7B7B7] h-[1px] w-full mt-20 mb-10">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg bg-[#FAF9F4] px-3">
          {formatDate(chats[0]?.time)}
        </span>
      </div>

      <div className="min-h-[2000px]">
        {loading && <div className="loading">Loading...</div>}
        {chats.map((chat: ChatData) => (
          <ChatBubble chat={chat} key={chat.id} />
        ))}
      </div>
    </div>
  );
}
