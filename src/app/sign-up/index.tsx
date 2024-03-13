import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import CustomButton from '@/components/CustomButton';
import { theme } from '@/theme';
import api from '@/utils/api';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await api.post('/sign-up', {
        name,
        email,
        password,
      });
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const  handleSigninPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setName}
        value={name}
        autoCapitalize="words"
        placeholderTextColor={theme.colors.gray_400}
      />
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
      <CustomButton title="Cadastrar" onPress={handleSignup} />
      <Text style={styles.subtitle} onPress={handleSigninPress}>Já tem uma conta? Faça login aqui!</Text>
    </View>
  );
}
