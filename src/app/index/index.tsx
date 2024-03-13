import {  Text, TextInput, View } from "react-native";
import {styles} from "./styles"
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { theme } from "@/theme";

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };
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
    <Text style={styles.subtitle}>Não tem uma conta? Cadastre-se aqui!</Text>
    </View>
   
  );
};
