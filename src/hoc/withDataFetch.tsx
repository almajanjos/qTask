import { ComponentType, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestState } from "../constants/http";

interface FetchParams {
  key: string;
  url: (params: any) => string;
}

export function withDataFetchNEW({ key = "data", url }: FetchParams) {
  function ComponentHOC<P>(Component: ComponentType<P>) {
    function ComponentWithDataFetch(props: P) {
      const params = useParams();

      const [data, setData] = useState([]);
      const [status, setStatus] = useState(requestState.IDLE);
      const [error, setError] = useState("");

      useEffect(() => {
        setStatus(requestState.PENDING);
        fetch(url(params))
          .then((response) => {
            if (response.ok === false) {
              throw new Error("Oops! An error occurred.");
            }
            return response.json();
          })
          .then((json) => {
            setStatus(requestState.RESOLVED);
            setData(json);
          })
          .catch((e) => {
            setError(e.message);
            setStatus(requestState.REJECTED);
          });
      }, [params]);

      return (
        <Component
          {...props}
          {...{ [key]: data, [`status${key}`]: status }}
          status={status}
          error={error}
        />
      );
    }
    return ComponentWithDataFetch;
  }

  return ComponentHOC;
}
