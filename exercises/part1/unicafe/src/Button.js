const Button = (props) => {
  const { handleClick, displayText } = props;

  return <button onClick={handleClick}>{displayText}</button>;
};

export default Button;
