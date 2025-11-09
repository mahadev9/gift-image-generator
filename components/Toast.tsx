interface ToastProps {
  message: string;
}

export const Toast = ({ message }: ToastProps) => (
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
    <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3">
      <span className="font-medium">{message}</span>
    </div>
  </div>
);
