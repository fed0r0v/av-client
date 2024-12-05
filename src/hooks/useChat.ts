// import { useEffect } from "react";
// import { useChatStore } from "@/store/useChatStore";
// import { socketService } from "@/services/socket.service";
// import { ChatService } from "@/services/chat.service";
// import { useAuth } from "@/hooks/useAuth";

// export function useChat(roomId: string) {
//   const { user } = useAuth();
//   const { messages, addMessage, setMessages, updateMessageStatus } =
//     useChatStore();

//   useEffect(() => {
//     const socket = socketService.getSocket();
//     if (!socket || !roomId) return;

//     socket.emit("join_room", roomId);

//     const handleNewMessage = (message: ChatMessage) => {
//       addMessage(message);
//     };

//     const handleMessageStatus = (data: {
//       messageId: string;
//       status: MessageStatus;
//     }) => {
//       updateMessageStatus(data.messageId, data.status);
//     };

//     socket.on("new_message", handleNewMessage);
//     socket.on("message_status", handleMessageStatus);

//     return () => {
//       socket.off("new_message", handleNewMessage);
//       socket.off("message_status", handleMessageStatus);
//       socket.emit("leave_room", roomId);
//     };
//   }, [roomId]);

//   const sendMessage = async (content: string) => {
//     const socket = socketService.getSocket();
//     if (!socket || !roomId) return;

//     const messageId = uuidv4();
//     const message = {
//       id: messageId,
//       content,
//       senderId: user!.id,
//       roomId,
//       status: "sending",
//       timestamp: new Date().toISOString(),
//     };

//     addMessage(message);

//     socket.emit("send_message", {
//       messageId,
//       content,
//       roomId,
//     });
//   };

//   return {
//     messages,
//     sendMessage,
//   };
// }
