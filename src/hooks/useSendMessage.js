import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { axiosClient } from "../services/api/axios";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await axiosClient.post(`/messages/send/${selectedConversation._id}`, {
			  message
			}, {
			  headers: {
				"Content-Type": "application/json"
			  }
			});
	  
			const data = res.data;
			if (data.error) {
			  throw new Error(data.error);
			}
	  
			setMessages([...messages, data]);
		  } catch (error) {
			toast.error(error.message);
		  } finally {
			setLoading(false);
		  }
	};

	return { sendMessage, loading };
};
export default useSendMessage;
