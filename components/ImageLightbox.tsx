import { Download, X } from "lucide-react";

interface ImageLightboxProps {
  imageUrl: string;
  onClose: () => void;
  onDownload: (imageUrl: string, index: number) => void;
}

export const ImageLightbox = ({
  imageUrl,
  onClose,
  onDownload,
}: ImageLightboxProps) => (
  <div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
    onClick={onClose}
  >
    <div className="absolute top-4 right-4 flex gap-2 z-10">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDownload(imageUrl, 0);
        }}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-all"
        title="Download"
      >
        <Download className="w-6 h-6" />
      </button>
      <button
        onClick={onClose}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-all"
        title="Close"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
    <img
      src={imageUrl}
      alt="Enlarged view"
      className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
);
