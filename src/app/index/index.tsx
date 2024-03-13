import {  Text, TextInput, View } from "react-native";
import {styles} from "./styles"
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { theme } from "@/theme";
import api from "@/utils/api"
import { router } from "expo-router";

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
 
    try {
      const response = await api.post('/sign-in', {
  email,
  password,
});
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error);
     
    }
  };

  const handleSignupPress = () => {
    router.navigate('/sign-up')
  }
  
  return (
     <View style={styles.container}>
      <Text style={styles.title}>My Financy Mobile</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={theme.colors.gray_400}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholderTextColor={theme.colors.gray_400}

      />
     <CustomButton title="Login" onPress={handleLogin}/>
    <Text style={styles.subtitle} onPress={handleSignupPress}>Não tem uma conta? Cadastre-se aqui!</Text>
    </View>
   
  );
};
