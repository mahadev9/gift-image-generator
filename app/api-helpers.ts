import { Message, ImageData } from "@/app/types";

/**
 * Calls the API to generate a response based on the prompt and images
 */
export const generateResponse = async (
    prompt: string,
    images: ImageData[]
): Promise<{ text: string; images?: string[] }> => {
    const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, images }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to generate response");
    }

    return data;
};

/**
 * Converts generated images from API to ImageData format
 */
export const convertGeneratedImages = (
    images: string[] | undefined
): ImageData[] | undefined => {
    if (!images) return undefined;

    return images.map((dataUrl: string) => ({
        data: dataUrl,
        mimeType: dataUrl.split(";")[0].split(":")[1],
        preview: dataUrl,
    }));
};

/**
 * Creates a new message object
 */
export const createMessage = (
    role: "user" | "assistant",
    content: string,
    images?: ImageData[]
): Message => ({
    id: Date.now().toString() + (role === "assistant" ? "1" : ""),
    role,
    content,
    images,
    timestamp: new Date(),
});
