export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    images?: ImageData[];
    timestamp: Date;
}

export interface ImageData {
    data: string;
    mimeType: string;
    preview: string;
}
