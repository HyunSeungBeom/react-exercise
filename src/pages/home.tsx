import { useNavigate } from "react-router-dom";
import { Button } from "common/button";
import { useEffect } from "react";

function HomePage() {
  const navigate = useNavigate();
  const buttons = ["react-api", "status"];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Hello</h1>
      {buttons.map((button, index) => {
        return (
          <div key={index} className="mb-4">
            <Button text={button} onClick={() => handleClick(`/${button}`)} />
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
