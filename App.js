import { StyleSheet } from 'react-native';
import Toast from './src/components/Toast';
import { TabNavigator } from './src/config/AppNavigator';
import { ToastProvider } from './src/utils/ToastContext';

export default function App() {
  return (
    <ToastProvider>
      <Toast />
      <TabNavigator />
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
