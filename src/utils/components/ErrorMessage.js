function ErrorMessage({ message }) {
  return (
    <p
      style={{
        color: '#B00020',
        fontSize: '0.9rem',
        height: '3px'
      }}
    >
      {message}
    </p>
  );
}

export default ErrorMessage;
