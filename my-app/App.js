import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {RstorantScreen} from './src/component/features/Screen/RstorantScreen'

// install react-nativ-paper
export default function App() {
  return (
<>
<RstorantScreen/>

 <ExpoStatusBar style="auto" />
</>
  );
}

