import React from 'react';
import {Alert} from 'react-native';

const showAlert = (title = 'Alerta', message) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: "OK",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
  export default showAlert;