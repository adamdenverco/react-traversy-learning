import React from "react";

const Card = ({
    children,
    cardBackgroundColor = "bg-gray-100",
    // cardTitle = "For Developers",
    // cardText = "Browse our React jobs and start your career today",
    // buttonText = "Browse Jobs",
    // buttonUrl = "/jobs.html",
    // buttonColor = "bg-black",
    // buttonColorHover = "bg-gray-700",
}) => {
    return (
        <>
            <div
                className={` ${cardBackgroundColor} p-6 rounded-lg shadow-md `}
            >
                {children}
            </div>
        </>
    );
};

export default Card;
