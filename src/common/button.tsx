export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: VoidFunction;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
