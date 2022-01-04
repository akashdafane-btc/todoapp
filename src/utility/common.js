import toast from 'react-hot-toast';

export const showToast = (message) => {
  toast.remove();
  message &&
    toast(message, {
      style: {
        background: '#333',
        color: '#fff',
      },
    });
};