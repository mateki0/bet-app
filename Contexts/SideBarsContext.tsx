import * as React from 'react';

export const SideBarsContext = React.createContext(undefined);

export const SideBarsProvider = ({ children }) => {
  const [isLeftBarOpen, setIsLeftBarOpen] = React.useState(false);
  const [isRightBarOpen, setIsRightBarOpen] = React.useState(false);

  const handleToggleLeftBar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
    setIsRightBarOpen(false);
  };
  const handleToggleRightBar = () => {
    setIsRightBarOpen(!isRightBarOpen);
    setIsLeftBarOpen(false);
  };

  const value = { isLeftBarOpen, handleToggleRightBar, isRightBarOpen, handleToggleLeftBar };

  return <SideBarsContext.Provider value={value}>{children}</SideBarsContext.Provider>;
};
