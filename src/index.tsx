
import React, { useEffect } from "react";
import {
  Text,
  StatusBar,
} from "react-native";
import SplashScreen from "react-native-splash-screen";

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <Text>Welcome</Text>
    </>
  );
};

export default App;
