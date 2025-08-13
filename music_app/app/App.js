// App.js
import React from 'react';
import "@/global.css"; // Import global styles
import AppNavigator from '../app/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;  // <-- No NavigationContainer
}
