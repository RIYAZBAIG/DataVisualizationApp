import React, { useState } from "react";
import { inferTypes } from "@rawgraphs/rawgraphs-core";

const MyComponent = () => {
  const [data, setData] = useState([
    [ "column1", "column2", "column3" ],
    [ 1, 2, 3 ],
    [ "A", "B", "C" ]
  ]);
  const [inferredTypes, setInferredTypes] = useState([]);

  const handleInferTypes = () => {
    setInferredTypes(inferTypes(data));
  };

  return (
    <div>
      <button onClick={handleInferTypes}>Infer Types</button>
      <pre>{JSON.stringify(inferredTypes, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
