import React from "react";
import MediaDetails from "@/app/components/mediaDetails/MediaDetails";
import {showService} from "@/app/services/api.shows.service";

type MediaDetailsProps = {
    params: Promise<{ id: string }>;
};

const MediaDetailsPage = async ({ params}: MediaDetailsProps) => {

    const { id } = await params;
    const media = await showService.getShowById(id);
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
