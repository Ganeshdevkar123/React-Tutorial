import React from "react";

// const DestructureProps = ({name, PName}) => {
//   return (
//     <div>{name} also name as {PName}</div>
//   )
// }

const DestructureProps = (props) => {
  const { name, PName } = props;
  return (
    <div>
      {name} also name as {PName}
    </div>
  );
};

export default DestructureProps;
