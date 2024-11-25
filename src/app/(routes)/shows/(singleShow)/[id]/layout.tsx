import React from "react";
import {Metadata} from "next";
import {showService} from "@/app/services/api.shows.service";


type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const movie = await showService.getShowById(id);
    return {
        title: `${movie.name} | The Best Movies`,
        description: `Learn more about ${movie.name}`,
    };
}

const SingleShowLayout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
}
export default SingleShowLayout;