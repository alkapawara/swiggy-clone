import { useRouteError } from "react-router-dom";


const ErrorElement=()=>{
    let error=useRouteError();
    return (
        <>
        <h1>oops !</h1>
        <h3>something went wrong.</h3>
        <h4>{error.status}: {error.statusText}</h4>
        </>
    )
}
 export default ErrorElement;