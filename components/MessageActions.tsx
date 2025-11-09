import { Pencil, Copy, Check } from "lucide-react";
import { ImageData } from "@/app/types";

interface MessageActionsProps {
  images: ImageData[];
  copiedImage: boolean;
  onEdit: (images: ImageData[]) => void;
  onCopy: (imageUrl: string) => void;
}

export const MessageActions = ({
  images,
  copiedImage,
  onEdit,
  onCopy,
}: MessageActionsProps) => (
  <>
    <span>|</span>
    <button
      onClick={() => onEdit(images)}
      className="flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 transition-colors"
      title="Edit this image"
    >
      <Pencil className="w-3 h-3" />
      <span>Edit</span>
    </button>
    <span>|</span>
    <button
      onClick={() => onCopy(images[0].preview)}
      className="flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 transition-colors"
      title="Copy image to clipboard"
    >
      {copiedImage ? (
        <>
          <Check className="w-3 h-3" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  </>
);
