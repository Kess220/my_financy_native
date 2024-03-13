import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Modal, TextInput, Alert, Animated } from 'react-native';
import { styles } from './styles';
import CustomButton from '@/components/CustomButton';
import { theme } from '@/theme';
import api from '@/utils/api';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [modalOpacity] = useState(new Animated.Value(0)); // Valor inicial da opacidade do modal
  const navigation = useNavigation();
  

  useEffect(() => {
    if (error) {
      Animated.timing(modalOpacity, {
        toValue: 1,
        duration: 500, // Duração da animação em milissegundos
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalOpacity, {
        toValue: 0,
        duration: 500, // Duração da animação em milissegundos
        useNativeDriver: true,
      }).start();
    }
  }, [error, modalOpacity]);

  const handleSignup = async () => {
    try {
      const response = await api.post('/sign-up', {
        name,
        email,
        password,
      });
  
      console.log('Signup successful:', response.data);
  
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error: any) {
  
      if (error.response && error.response.status === 400) {
        setError('Erro ao cadastrar. Verifique todos os campos e tente novamente');
      } 
      else if (error.response && error.response.status === 409) {
        setError('Email já cadastrado, escolha um email que não está sendo utilizado');
      }
      else {
        setError('Erro ao cadastrar. Entre em contato com o suporte');
      }
    }
  };
  
  const handleSigninPress = () => {
    navigation.goBack();
  };

  const closeModal = () => {
    setError(null);
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
      
      <Modal
        visible={!!error}
        transparent={true}
        onRequestClose={closeModal}
      >
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: modalOpacity,
          }}
        >
          <View style={styles.modalContent}>
            <Text>{error}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
}
