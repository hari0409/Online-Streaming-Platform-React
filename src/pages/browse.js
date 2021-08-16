import React from "react";
import BrowseContainer from "../Containers/Browse";
import useContent from "../Hooks/use-content";
import selectionFilter from "../Utils/file-selection";
export default function Browse()
{
    // Series and Movies
    const {series}=useContent("series");
    const {films}=useContent("films");
    // Slides
    const slides = selectionFilter({ series, films });
    console.log(slides);
    // Browser Container
    return (
        <>
            <BrowseContainer slides={slides}/>
        </>
    )
}