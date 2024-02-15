import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { detail } = useParams();

  useEffect(() => {
    console.log(detail);
  });

  return <div></div>;
}

export default DetailPage;
