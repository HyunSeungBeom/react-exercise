import { useNavigate } from "react-router-dom";
import { Button } from "common/button";

function HomePage() {
  const navigate = useNavigate();
  const buttons = ["react-api", "status"];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Hello</h1>
      {buttons.map((button, index) => {
        return (
          <div key={index} className="mb-4">
            <Button text={button} onClick={() => handleClick(`/${button}`)} />
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
