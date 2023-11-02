import React from 'react';

// ** Custom Components
import MainStack from './navigation';

// ** Third Party Packages
import Toast from 'react-native-toast-message';

function App() {
  return (
    <>
      <MainStack />
      <Toast />
    </>
  );
}

// @ts-ignore
export default App;
