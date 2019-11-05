import React from 'react';
import AuthContextProvider from "./Context";
import Tables from "./components/Table";

function App() {
  return (
<AuthContextProvider>
  <Tables/>
</AuthContextProvider>
  );
}

export default App;
