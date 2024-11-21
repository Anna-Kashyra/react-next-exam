import React from 'react';
import { movieService } from "@/app/services/api.movies.service";
import MediaDetails from "@/app/components/mediaDetails/MediaDetails";

type MediaDetailsProps = {
    params: { id: string };
};

const MediaDetailsPage = async ({ params }: MediaDetailsProps) => {

    const media = await movieService.getMovieById(params.id);

    if (!media) {
        return <div>Movie not found</div>;
    }
    return <MediaDetails media={media} />;
};

export default MediaDetailsPage;