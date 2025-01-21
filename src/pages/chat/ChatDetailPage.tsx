import ChatRoom from './CharRoom';
import ChatList from './ChatListPage';

const ChatDetailPage = () => {
  return (
    <div className="flex h-screen bg-background p-6">
      <div className="flex w-full overflow-hidden rounded-3xl border border-border/50 bg-card">
        <ChatList />
        <ChatRoom />
      </div>
    </div>
  );
};

export default ChatDetailPage;
