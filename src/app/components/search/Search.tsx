// 'use client';
// import React, {ChangeEvent, FC} from 'react';
// import styles from '@/app/components/search/Search.module.css';
//
// type SearchProps = {
//     onSearch: (query: string) => void;
// };
//
// const Search: FC<SearchProps> = ({ onSearch }) => {
//     let query: string;
//
//     const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//         query = event.target.value;
//     };
//
//     const handleSearch = () => {
//         onSearch(query);
//     };
//
//     return (
//         <div className={styles.search}>
//             <input
//                 type="text"
//                 onChange={handleInputChange}
//                 placeholder="Enter your request"
//                 className={styles.search_input}
//             />
//             <button onClick={handleSearch} className={styles.search_button}>
//                 Search
//             </button>
//         </div>
//     );
// };
//
// export default Search;


'use client';
import React, {ChangeEvent, useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/components/search/Search.module.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/search?query=${encodeURIComponent(query)}`);
            setQuery('');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.search}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter your request"
                className={styles.search_input}
            />
            <button onClick={handleSearch} className={styles.search_button}>
                Search
            </button>
        </div>
    );
};

export default Search;

