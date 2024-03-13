import React, { useState } from 'react';
import { Text, TextInput, View, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CustomButton from '@/components/CustomButton';
import { theme } from '@/theme';
import api from '@/utils/api';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await api.post('/sign-in', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
    } catch (error:any) {
      if(error.response.status === 401){
        setError('Credenciais inválidas. Verifique seu email e senha e tente novamente.');

      }else{
        setError('Erro desconhecido, entre em contato com o suporte')
      }
      
    }
  };

  const handleSignupPress = () => {
    router.navigate('/sign-up');
  };

  const closeModal = () => {
    setError(null);
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
      <CustomButton title="Entrar" onPress={handleLogin} />
      <Text style={styles.subtitle} onPress={handleSignupPress}>
        Não tem uma conta? Cadastre-se aqui!
      </Text>
      <Modal visible={!!error} transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{error}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
