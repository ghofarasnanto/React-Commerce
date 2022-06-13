import React from "react";
import { useParams } from "react-router-dom";

/**
 * WithParams(Component)
 */
function withParams(Component) {
  function WithParams(props) {
    let params = useParams();
    return <Component params={params} {...props} />;
  }
  return WithParams;
}

export default withParams;