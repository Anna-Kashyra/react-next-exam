import styles from "./page.module.css";
import PopularMovies from "@/app/components/(movies)/popularMovies/PopularMovies";
import TopRatedMovies from "@/app/components/(movies)/topRatedMovies/TopRatedMovies";
import UpcomingMovies from "@/app/components/(movies)/upcomingMovies/UpcomingMovies";

export default function Home  () {
    return (
        <main className={styles.main}>
            <h1>The largest database of the best movies and TV shows</h1>
            <PopularMovies/>
            <UpcomingMovies/>
            <TopRatedMovies/>
        </main>
    );
}
