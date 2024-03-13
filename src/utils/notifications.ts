import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

export const sendPushNotification = (message:string) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Notificação',
      body: message,
    },
    trigger: null,
  });
};
