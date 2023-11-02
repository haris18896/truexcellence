import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';

// Show a toast message
export const showToast = ({
  title = 'Title',
  message = 'Message',
  type = 'success',
}) => {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
    topOffset: Platform.OS === 'ios' ? 40 : 30,
    customText: {
      text1: {
        fontSize: 16,
        fontWeight: 600,
      },
      text2: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
  });
};
