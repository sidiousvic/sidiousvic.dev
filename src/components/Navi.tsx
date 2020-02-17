import React from "react";

interface NaviProps {
  value: string | number;
}

const Navi: React.FC<NaviProps> = props => {
  const { value } = props;
  return <div className="navi">{value}</div>;
};

export default Navi;
