import { useEffect, useState } from "react";
import { Button } from "common/button";
import { useParams, useNavigate } from "react-router-dom";
import { getSource } from "service/api";

function DetailPage() {
  const { sub, detail } = useParams();
  const [component, setComponent] = useState();
  const navigate = useNavigate();

  const fetchGetSource = async ({
    sub,
    detail,
  }: {
    sub: string;
    detail: string;
  }) => {
    const response = getSource(sub + "/" + detail);
    setComponent(await response);
  };

  useEffect(() => {
    if (!sub || !detail) return;

    fetchGetSource({ sub, detail });
  }, []);

  return (
    <>
      <div className="absolute top-4 right-4">
        <Button text="뒤로가기" onClick={() => navigate(-1)} />
      </div>
      <h1 className="text-3xl font-bold mb-4">{detail}</h1>
      <div> {component}</div>
    </>
  );
}

export default DetailPage;
