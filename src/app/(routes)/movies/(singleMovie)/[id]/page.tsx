import React from "react";
import MediaDetails from "@/app/components/mediaDetails/MediaDetails";
import { movieService } from "@/app/services/api.movies.service";

type MediaDetailsProps = {
    params: Promise<{ id: string }>;
};

const MediaDetailsPage = async ({ params }: MediaDetailsProps) => {
    const { id } = await params;
    const media = await movieService.getMovieById(id);

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
