import { theme } from '@/theme';
import { colors } from '@/theme/colors';
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
 
});