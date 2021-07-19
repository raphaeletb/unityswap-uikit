import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <Svg viewBox="0 0 32 32" {...props} color={theme.colors.primary}>
      <image width="32" height="32" href="/images/logo.png"/> 
    </Svg>
  );
};

export default Icon;
