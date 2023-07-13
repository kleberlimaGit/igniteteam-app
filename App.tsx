import { Loading } from "@components/loading";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from "./src/theme";
import { Routes } from "./src/routes";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });
  return (
    <ThemeProvider theme={theme}>
        {!fontsLoaded && <StatusBar 
          style="light"
        />} 
        { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}
