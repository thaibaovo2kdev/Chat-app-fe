import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { axiosClient } from "../services/api/axios";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await axiosClient.get(`/messages/${selectedConversation._id}`);
				const data = res.data;
				if (data.error) {
				  throw new Error(data.error);
				}
				setMessages(data);
			  } catch (error) {
				toast.error(error.message);
			  } finally {
				setLoading(false);
			  }
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;
