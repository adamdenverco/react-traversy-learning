import React from "react";

const Card = ({
    cardBackgroundColor = "bg-gray-100",
    cardTitle = "For Developers",
    cardText = "Browse our React jobs and start your career today",
    buttonText = "Browse Jobs",
    buttonUrl = "/jobs.html",
    buttonColor = "bg-black",
    buttonColorHover = "bg-gray-700",
}) => {
    return (
        <>
            <div
                className={` ${cardBackgroundColor} p-6 rounded-lg shadow-md `}
            >
                <h2 className="text-2xl font-bold">{cardTitle}</h2>
                <p className="mt-2 mb-4">{cardText}</p>
                <a
                    href="{buttonUrl}"
                    className={` inline-block ${buttonColor} text-white rounded-lg px-4 py-2 hover:${buttonColorHover} `}
                >
                    {buttonText}
                </a>
            </div>
        </>
    );
};

export default Card;
