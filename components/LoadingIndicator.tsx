import { Bot, Loader2 } from "lucide-react";

export const LoadingIndicator = () => (
  <div className="flex gap-3 justify-start animate-fade-in">
    <div className="w-10 h-10 rounded-full bg-linear-to-br from-red-500 to-amber-500 flex items-center justify-center shadow-lg">
      <Bot className="w-5 h-5 text-white" />
    </div>
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md border border-gray-200 dark:border-slate-700">
      <div className="flex items-center gap-2">
        <Loader2 className="w-5 h-5 animate-spin text-red-600 dark:text-red-400" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          AI is thinking...
        </span>
      </div>
    </div>
  </div>
);
