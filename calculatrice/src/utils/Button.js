const Button = ({ input, onClick, bootstrapOption, type }) => {
  return (
    <div
      className={`btn btn-${bootstrapOption} ${input} ${type}`}
      onClick={() => {onClick(input, type)}}
    >
      {input}
    </div>
  );
};

export default Button;
