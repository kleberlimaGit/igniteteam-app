import { Loading } from "@components/loading";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import Groups from "@screens/Groups";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from "./src/theme";
import NewGroup from "@screens/NewGroup";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <><NewGroup />
      <StatusBar style="light"/></> : <Loading/>}
    </ThemeProvider>
  );
}
