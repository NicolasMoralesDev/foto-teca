import React from "react";
import Link from "next/link";

const error404 = () => {
    return (
    <div className="d-flex  justify-content-center align-items-center   h-100 flex-column m-5">
        <img src="404.jpg" alt="404 error" width={"200px"} />
        <Link className="btn btn-warning  text-light" href="/">ir al home</Link>
    </div>
    );
};

export default error404;
