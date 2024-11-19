import styles from "./page.module.css";
import PopularMovies from "@/app/components/(movies)/popularMovies/PopularMovies";
import TopRatedMovies from "@/app/components/(movies)/topRatedMovies/TopRatedMovies";
import UpcomingMovies from "@/app/components/(movies)/upcomingMovies/UpcomingMovies";

export default function Home  () {
    return (
        <main className={styles.main}>
            <PopularMovies/>
            <TopRatedMovies/>
            <UpcomingMovies/>
        </main>
    );
}
