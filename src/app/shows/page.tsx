import React from 'react';
import AllShows from "@/app/components/(shows)/allShows/AllShows";
import ShowGenres from "@/app/components/(shows)/showGenres/ShowGenres";


const ShowsPage = async () => {
    return (
        <>
            <ShowGenres/>
            <AllShows/>
        </>

    );
};

export default ShowsPage;