import { useNavigate, useParams } from "react-router-dom";
import { Button } from "common/button";
import { useEffect, useState } from "react";

function SubPage() {
  const { sub } = useParams();
  const navigate = useNavigate();
  const [buttons, setButtons] = useState<string[]>();

  useEffect(() => {
    if (sub == "react-api") {
      setButtons([
        "renderToNodeStream",
        "renderToStaticMarkup",
        "renderToString",
      ]);
    }

    if (sub == "status") {
      setButtons([
        "fluxPattern",
        "swr",
        "useAppState",
        "useAppStateRestore",
        "useRef",
        "useSubscription",
      ]);
    }
  }, []);

  return (
    <>
      <div className="absolute top-4 right-4">
        <Button text="뒤로가기" onClick={() => navigate(-1)} />
      </div>
      <h1 className="text-3xl font-bold mb-4">{sub}</h1>
      {buttons &&
        buttons.map((button: string, index: number) => {
          return (
            <div key={index} className="mb-4">
              <Button
                text={button}
                onClick={() => {
                  navigate(`/${sub}/${button}`);
                }}
              />
            </div>
          );
        })}
    </>
  );
}

export default SubPage;
