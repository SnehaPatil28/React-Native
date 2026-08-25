import React, { useState } from 'react';
import Registration from './Component/Exp4/registration';
import Success from './Component/Exp4/success';
import LogIn from './Component/Exp2/LogIn';

const App = () => {
  // const [screen, setScreen] = useState('login');

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // if (screen === 'registration') {
  //   return (
  //     <Registration
  //       onRegister={(email, password) => {
  //         setEmail(email);
  //         setPassword(password);
  //         setScreen('login');
  //       }}
  //       onLoginPress={() => setScreen('login')}
  //     />
  //   );
  // }

  // if (screen === 'success') {
  //   return <Success onLogout={() => setScreen('login')} />;
  // }

  // return (
  //   <LogIn
  //     registeredEmail={email}
  //     registeredPassword={password}
  //     onLoginSuccess={() => setScreen('success')}
  //     onCreateAccount={() => setScreen('registration')}
  //   />
  // );
};

export default App;
