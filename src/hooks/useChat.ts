import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { testAxios } from '@/lib/axiosInstance';
import type { CommonChatRoomResponse } from '@/types/chat-type/chat.types';

export const useChat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // 채팅방 목록 조회 쿼리
  const { data: chatRooms, isLoading: isChatRoomsLoading } = useQuery({
    queryKey: ['chatRooms', 10], // 10은 현재 고정된 userId
    queryFn: async () => {
      const response = await testAxios.get<CommonChatRoomResponse>(
        '/api/chat/rooms',
        {
          params: {
            userId: 10,
          },
        },
      );
      return response.data;
    },
  });

  const handleChat = async (productId: number, sellerId: number) => {
    if (sellerId) {
      try {
        await testAxios.post('/api/chat/rooms', {
          articleId: productId,
          buyerId: 10,
          sellerId: sellerId,
        });
        navigate(`chat/${id}`);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 409) {
          navigate(`chat/${id}`);
          return;
        }
        console.error('채팅방 생성 실패:', error);
      }
    }
  };

  return { chatRooms, isChatRoomsLoading, handleChat };
};
