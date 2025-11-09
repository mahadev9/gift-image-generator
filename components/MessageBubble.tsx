import { Bot, User } from "lucide-react";
import { Message, ImageData } from "@/app/types";
import { ImagePreview } from "./ImagePreview";
import { MessageActions } from "./MessageActions";

interface MessageBubbleProps {
  message: Message;
  messageIndex: number;
  isLatest: boolean;
  copiedImage: boolean;
  onEnlargeImage: (preview: string) => void;
  onDownloadImage: (preview: string, index: number) => void;
  onEditImage: (images: ImageData[]) => void;
  onCopyImage: (imageUrl: string) => void;
}

export const MessageBubble = ({
  message,
  messageIndex,
  isLatest,
  copiedImage,
  onEnlargeImage,
  onDownloadImage,
  onEditImage,
  onCopyImage,
}: MessageBubbleProps) => {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";
  const hasImages = message.images && message.images.length > 0;
  const showActions = isAssistant && hasImages && isLatest;

  return (
    <div
      className={`flex gap-3 animate-slide-up ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {isAssistant && (
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-red-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl p-4 shadow-md transition-all hover:shadow-lg ${
          isUser
            ? "bg-linear-to-br from-red-600 to-rose-600 text-white"
            : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-gray-100"
        }`}
      >
        {hasImages && (
          <div>
            <div
              className={`gap-3 mb-3 ${
                isAssistant ? "grid grid-cols-1" : "grid grid-cols-2"
              }`}
            >
              {message.images!.map((img, idx) => (
                <ImagePreview
                  key={idx}
                  image={img}
                  index={idx}
                  role={message.role}
                  onEnlarge={onEnlargeImage}
                  onDownload={onDownloadImage}
                />
              ))}
            </div>
          </div>
        )}

        <p className="whitespace-pre-wrap wrap-break-word leading-relaxed">
          {message.content}
        </p>

        <div
          className={`flex items-center gap-2 text-xs mt-2 ${
            isUser ? "text-white/70" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <span>{message.timestamp.toLocaleTimeString()}</span>
          {showActions && (
            <MessageActions
              images={message.images!}
              copiedImage={copiedImage}
              onEdit={onEditImage}
              onCopy={onCopyImage}
            />
          )}
        </div>
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-rose-500 to-red-500 flex items-center justify-center shrink-0 shadow-lg">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};
