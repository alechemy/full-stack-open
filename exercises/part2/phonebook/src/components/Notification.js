const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }
  const { message, type } = notification;
  const baseStyle = {
    backgroundColor: 'lightgray',
    padding: '1rem',
    maxWidth: '20rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderRadius: '5px',
    marginBottom: '1rem',
  };

  const additionalStyles =
    type === 'success'
      ? {
          border: '1px solid green',
          color: 'green',
        }
      : {
          border: '1px solid red',
          color: 'red',
        };

  const messageStyle = { ...baseStyle, ...additionalStyles };

  return <div style={messageStyle}>{message}</div>;
};

export default Notification;
