import React from 'react';
import AllShows from "@/app/components/allShows/AllShows";
import Genres from "@/app/components/genres/Genres";


const ShowsPage = async () => {
    return (
        <>
            <Genres type={'show'}/>
            <AllShows/>
        </>

    );
};

export default ShowsPage;