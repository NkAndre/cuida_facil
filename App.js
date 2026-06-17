import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Glicemia from "./src/pages/Glicemia";
import Cadastro from "./src/pages/Cadastro";
import Agua from "./src/pages/Agua";
import Splash from "./src/pages/Splash";

import Vacinas from "./src/pages/Vacinas";
import Calorias from "./src/pages/Calorias";
import Alergia from "./src/pages/Alergia";
import IMC from "./src/pages/IMC";
import Dicas from "./src/pages/Dicas";
import Remedios from "./src/pages/Remedios";
import Meditacao from "./src/pages/Meditacao";
import Emergencia from"./src/pages/Emergencia";
import Pressao from"./src/pages/Pressao";
import Sangue from "./src/pages/Sangue";
import Perfil from "./src/pages/Perfil";
import Menu from "./src/pages/Menu";
import Sobre from "./src/pages/Sobre";
import Configuracao from "./src/pages/Configuracao";
import Ajuda from "./src/pages/Ajuda";
import Privacidade from "./src/pages/Privacidade"
//import Ubs from "./src/pages/Ubs"
import './i18n'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={Home} />

    

        <Stack.Screen name="Vacinas" component={Vacinas} />

        <Stack.Screen name="Glicemia" component={Glicemia} />
        <Stack.Screen name="Agua" component={Agua} />
        <Stack.Screen name="Calorias" component={Calorias} />
        <Stack.Screen name="Alergia" component={Alergia} />
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="Dicas" component={Dicas} />
        <Stack.Screen name="Remedios" component={Remedios} />
        <Stack.Screen name="Meditacao" component={Meditacao}/>
        <Stack.Screen name="Emergencia" component={Emergencia}/>
        <Stack.Screen name ="Pressao" component={Pressao}/>
        <Stack.Screen name ="Sangue" component={Sangue}/>
        <Stack.Screen name="Cadastro" component={Cadastro} />

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name = "Sobre" component={Sobre}/>
         <Stack.Screen name = "Configuracao" component={Configuracao}/>
        {/*Stack.Screen name = "Ubs" component={Ubs}/>*/}
        <Stack.Screen name = "Ajuda" component={Ajuda}/>
                <Stack.Screen name = "Privacidade" component={Privacidade}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
