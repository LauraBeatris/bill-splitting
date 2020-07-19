
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import ThemeContainer from "./contexts/ThemeContext/ThemeContainer";
import Main from "./views/Main/Main";

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeContainer>
      <Main />
    </ThemeContainer>
  );
};

export default App;
