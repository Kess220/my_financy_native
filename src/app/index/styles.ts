import { theme } from '@/theme';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.gray_shadow
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    fontFamily:theme.fonts.family.medium,
    color:theme.colors.yellow,
    marginBottom: 20,
  },
  subtitle:{
marginTop: 18,
color: theme.colors.gray_300
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: theme.colors.gray_300,
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 8,
    width:'90%'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: theme.colors.gray_300,
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});