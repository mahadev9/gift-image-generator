import { Gift } from "lucide-react";

export const WelcomeScreen = () => (
  <div className="text-center text-muted-foreground py-16 animate-fade-in">
    <div className="inline-flex p-6 bg-linear-to-br from-red-100 to-amber-100 dark:from-red-900/30 dark:to-amber-900/30 rounded-2xl mb-6">
      <Gift className="w-20 h-20 text-red-600 dark:text-red-400" />
    </div>
    <p className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      Welcome to ThinkGift
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
      Upload images and ask AI to create personalized gifts, add festive
      elements, and generate creative suggestions
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
      <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full text-xs text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
        🎁 Create gift cards
      </div>
      <div className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-xs text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
        ✨ Add decorations
      </div>
      <div className="px-4 py-2 bg-rose-50 dark:bg-rose-900/20 rounded-full text-xs text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
        🎨 Personalize gift boxes
      </div>
    </div>
  </div>
);
