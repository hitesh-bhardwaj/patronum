import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Fuse from 'fuse.js';

const Search = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      const fuse = new Fuse(posts, {
        keys: ['title', 'excerpt', 'content'],
        threshold: 0.3,
      });
      const results = fuse.search(searchQuery).map(result => result.item);
      setFilteredPosts(results.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setFilteredPosts([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, posts]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setIsSearchOpen(false);
    router.push(`/search?query=${searchQuery}`);
  };

  const handleSuggestionClick = (slug) => {
    setIsSearchOpen(false);
    router.push(`/${slug}`);
  };

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setFilteredPosts([]);
    setShowSuggestions(false);
  };

  return (
    <div className={`fadeUp search-container cat-btn transition-all duration-300 ease-out z-10 relative ${isSearchOpen ? "lg:mb-[9vw] mb-[20vw]" : "lg:mb-[5vw] mb-[8vw]"} `}>
      <button
        className={`flex justify-center items-center lg:gap-[0.8vw] gap-[2vw] h-fit ${isSearchOpen ? "active" : ""} `}
        aria-label='Open Search Input'
        onClick={handleOpenSearch}
      >
        <span>Search</span>
        <svg className='lg:w-[1vw] lg:h-[1vw] w-[3vw] h-[3vw]' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.8194 15.9221C17.932 17.0351 19.0265 18.13 20.1271 19.219C20.6864 19.7785 21.2457 20.3319 21.799 20.8974C22.0276 21.1321 22.0576 21.4449 21.9073 21.6976C21.763 21.9322 21.4743 22.0646 21.2097 21.9683C21.0473 21.9081 20.8969 21.7938 20.7766 21.6675C19.237 20.1394 17.7034 18.5993 16.1759 17.0652C16.0977 16.987 16.0315 16.8967 15.9533 16.8005C13.5296 18.8219 10.7992 19.5859 7.73806 19.0024C5.29633 18.5391 3.33573 17.2577 1.86829 15.2604C-1.07862 11.2657 -0.477211 5.71887 3.23349 2.42206C6.92616 -0.862717 12.4952 -0.79654 16.1277 2.56043C19.8144 5.96553 20.3316 11.8432 16.8194 15.9221ZM17.9079 9.59925C17.9079 4.99695 14.2032 1.28502 9.60243 1.27901C5.01367 1.27299 1.29094 4.99093 1.28492 9.5812C1.27891 14.1955 4.99563 17.9135 9.60845 17.9135C14.2092 17.9075 17.9139 14.2015 17.9079 9.59925Z" fill="currentColor" />
        </svg>
      </button>

      {/* {isSearchOpen && ( */}
        <div className={`absolute z-[100] lg:right-0 lg:left-auto left-0 top-full lg:mt-[1.5vw] mt-[4vw] transition-all duration-500 ease-out ${isSearchOpen ? "opacity-100 lg:w-[30vw] w-[90vw]" : "w-[0vw] opacity-0"}`}>
          <form onSubmit={handleSearchSubmit} className='w-full relative'>
            <input
              type="text"
              className="search-input lg:text-[1.1vw] text-[3.5vw] w-full lg:p-[1vw] p-[2vw] bg-transparent lg:border-b border-b-2 text-[#444444] border-primary focus-visible:outline-0"
              placeholder="Enter your text to search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span
              aria-label='Close Search Input'
              className='absolute cursor-pointer lg:h-[1.2vw] lg:w-[1.2vw] w-[3vw] h-[3vw] lg:right-[1vw] right-[2vw] top-1/2 -translate-y-1/2 hover:rotate-180 hover:scale-80 transition duration-500'
              onClick={handleCloseSearch}
            >
              <img src='/assets/icons/close.svg' alt='close icon' className='w-full h-full' />
            </span>
          </form>
          {showSuggestions && (
            <ul className="suggestions-list bg-white rounded shadow-md lg:mt-2 mt-[2vw]">
              {filteredPosts.map((post) => (
                <li
                  key={post.slug}
                  className="suggestion-item lg:p-[1vw] p-[2vw] lg:text-[1.1vw] text-[3.5vw] cursor-pointer hover:bg-gray-100 duration-200 hover:text-primary"
                  onClick={() => handleSuggestionClick(post.slug)}
                >
                  {post.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      {/* )} */}
    </div>
  );
};

export default Search;
