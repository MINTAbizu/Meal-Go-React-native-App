import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {RstorantScreen} from './src/component/features/Screen/RstorantScreen'
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/themee/inde';
import {SafeAreaView} from './utility/SafeAreaView.js'
// for create navigation button import it 
import {NavigationContainer} from '@react-navigation/native'
import {createBootomTabNavigator} from 'react-navigation/bootom-tabs'
import {IonIcon} from '@expo/vector-icons'
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
  <Tab.navigator 

  screenOptions={({route})=>({
    tabBarIcon:({focused,color,size})=>{
        let iconName=;
        if(route.name === 'Restorant'){
         
          iconName="md-restaurant "
        }else if (route.name === "Settings"){
          iconName="md-settings"
        }else if(route.name="map"){
           iconName="md-map"

        }
      }
      

      return <IonIcon name={iconName} size={size} color={color/>}
    
  })}

  tabBarOptions={{
    activeTintColor:"tomato",
    inactiveTintColor:"gray"
  }}
  
   >

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

