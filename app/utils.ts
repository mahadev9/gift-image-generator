/**
 * Downloads an image file to the user's device
 */
export const downloadImage = (imageUrl: string, index: number) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `gift-image-${Date.now()}-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

/**
 * Copies an image to the clipboard
 */
export const copyImageToClipboard = async (imageUrl: string): Promise<boolean> => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        await navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]: blob,
            }),
        ]);
        return true;
    } catch (error) {
        console.error("Failed to copy image:", error);
        return false;
    }
};

/**
 * Converts a File object to ImageData
 */
export const fileToImageData = (file: File): Promise<{ data: string; mimeType: string; preview: string }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve({
                data: base64String,
                mimeType: file.type,
                preview: base64String,
            });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

/**
 * Auto-scrolls a scroll container to the bottom
 */
export const scrollToBottom = (scrollAreaRef: React.RefObject<HTMLDivElement | null>) => {
    if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector(
            "[data-radix-scroll-area-viewport]"
        );
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }
};

/**
 * Focuses the input element
 */
export const focusInput = () => {
    setTimeout(() => {
        const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (inputElement) {
            inputElement.focus();
        }
    }, 100);
};
