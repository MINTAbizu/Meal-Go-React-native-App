import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {RstorantScreen} from './src/component/features/Screen/RstorantScreen'
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/themee/inde';
import {SafeAreaView} from './utility/SafeAreaView.js'
// for create navigation button import it 
import {NavigationContainer} from '@react-navigation/native'
import {createBootomTabNavigator} from 'react-navigation/bootom-tabs'
// install react-nativ-paper

  const Tab=createBootomTabNavigator()
  const Settings=()=><SafeAreaView> <Text>Settings</Text></SafeAreaView>
  const Map=()=> <SafeAreaView> <Text>Map</Text></SafeAreaView>
export default function App() {

  return (
<>
<ThemeProvider theme={theme}> 
{/* <RstorantScreen/> */}
<NavigationContainer>
  <Tab.navigator>

    <Tab.Screen name="Restorant" component={RstorantScreen}/>
    <Tab.Screen name="Map" component={}/>
    <Tab.Screen name="Settings" component={}/>
    
    <Tab.navigator>
  
  
   </NavigationContainer>
</ThemeProvider>

 <ExpoStatusBar style="auto" />
</>
  );
}

