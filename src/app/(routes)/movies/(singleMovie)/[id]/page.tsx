import React from "react";
import MediaDetails from "@/app/components/mediaDetails/MediaDetails";
import { movieService } from "@/app/services/api.movies.service";

type MediaDetailsProps = {
    params: { id: string };
};

const MediaDetailsPage = async ({ params }: MediaDetailsProps) => {

    const media = await movieService.getMovieById(params.id);

    if (!media) {
        return <div>Movie not found</div>;
    }

    const title =media.title;

    return (
            <>
                <h1>{title}</h1>
                <MediaDetails media={media} />
            </>
        );
};

export default MediaDetailsPage;
