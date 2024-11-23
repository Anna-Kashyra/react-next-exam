import React from "react";
import MediaDetails from "@/app/components/mediaDetails/MediaDetails";
import {showService} from "@/app/services/api.shows.service";

type MediaDetailsProps = {
    params: { id: string };
};

const MediaDetailsPage = async ({ params}: MediaDetailsProps) => {

    const media = await showService.getShowById(params.id);

    const title =media.name;

    if (!media) {
        return <div>Movie not found</div>;
    }
    return (
        <>
            <h1>{title}</h1>
            <MediaDetails media={media}/>
        </>
    );

};

export default MediaDetailsPage;
