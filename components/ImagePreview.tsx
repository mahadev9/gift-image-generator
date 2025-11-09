import { Download } from "lucide-react";
import { ImageData } from "@/app/types";

interface ImagePreviewProps {
  image: ImageData;
  index: number;
  role: "user" | "assistant";
  onEnlarge: (preview: string) => void;
  onDownload: (preview: string, index: number) => void;
}

export const ImagePreview = ({
  image,
  index,
  role,
  onEnlarge,
  onDownload,
}: ImagePreviewProps) => (
  <div
    className="group relative overflow-hidden rounded-xl cursor-pointer"
    onClick={() => onEnlarge(image.preview)}
  >
    <img
      src={image.preview}
      alt={`${role === "assistant" ? "Generated" : "Uploaded"} ${index + 1}`}
      className={`rounded-xl border-2 border-white/50 dark:border-slate-600 w-full object-cover transition-transform group-hover:scale-105 ${
        role === "assistant" ? "h-auto max-h-96" : "h-32"
      }`}
    />
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDownload(image.preview, index);
      }}
      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
      title="Download image"
    >
      <Download className="w-4 h-4" />
    </button>
  </div>
);
