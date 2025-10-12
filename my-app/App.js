import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {RstorantScreen} from './src/component/features/Screen/RstorantScreen'
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/themee/inde';

// install react-nativ-paper
export default function App() {
  return (
<>
<ThemeProvider theme={theme}> 
<RstorantScreen/>
</ThemeProvider>

 <ExpoStatusBar style="auto" />
</>
  );
}

