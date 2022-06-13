import React from "react";
import { useSearchParams } from "react-router-dom";

/**
 * withSearchParams(Component)
 */
function withSearchParams(Component) {
  function WithSearchParams(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
      <Component
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    );
  }
  return WithSearchParams;
}

export default withSearchParams;