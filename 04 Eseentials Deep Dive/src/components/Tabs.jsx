import React from "react";

const Tabs = ({children, menuButtons, ButtonsContainer}) => {

  return (
    <>
      <ButtonsContainer>
        {menuButtons}
      </ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
