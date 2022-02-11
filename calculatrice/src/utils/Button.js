const Button = ({ input, onClick, bootstrapOption }) => {
  return (
    <div
      className={`btn btn-${bootstrapOption} ${input}`}
      onClick={onClick(input)}
    >
      {input}
    </div>
  );
};

export default Button;
