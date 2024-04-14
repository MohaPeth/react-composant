import React, { useState } from 'react';

const withFirstName = (WrappedComponent) => {
  // Définition du composant HOC
  const WithFirstName = () => {
    const [firstName, setFirstName] = useState("Moha GMC");

    return <WrappedComponent firstName={firstName} setFirstName={setFirstName} />;
  };

  return WithFirstName;
};

export default withFirstName;
