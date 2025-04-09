import Link from 'next/link';
import styles from '@/styles/pagination.module.css'

const MAX_NUM_PAGES = 5;

const Pagination = ({ pagesCount, currentPage, basePath, addCanonical = true }) => {
  const path = `${basePath}/`;

  const hasPreviousPage = pagesCount > 1 && currentPage > 1;
  const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    if (pagesCount > MAX_NUM_PAGES) {
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      if (!isHead) {
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

    return (
        <>
            <div className={styles.pagiContainer}>
                <div className={styles.pagiMain}>
                    <Link className={`${styles.pagiButtons} ${styles.previous} ${!hasPreviousPage ? styles.disabled : ''}`}
                        href={hasPreviousPage ? `${path}page/${currentPage - 1}` : '#'}
                        aria-label="Go to Previous Page"
                        tabIndex={hasPreviousPage ? 0 : -1}
                    >
                        <img loading='lazy' src='/assets/icons/arrow-page-left.svg' alt='arrow-previous' />
                    </Link>

                    <ul className={styles.pagiList}>
                        {pages.map((page) => {
                        const active = page === currentPage;
                        return active ? (
                            <li key={page} className={styles.active}>
                                <span aria-label={`Current Page, Page ${page}`} aria-current="true">
                                    {page}
                                </span>
                            </li>
                        ) : (
                            <li key={page}>
                                <Link href={page === 1 ? path : `${path}page/${page}`} aria-label={`Goto Page ${page}`}>
                                    <span>{page}</span>
                                </Link>
                            </li>
                        );
                        })}
                    </ul>

                    <Link className={`${styles.pagiButtons} ${styles.next} ${!hasNextPage ? styles.disabled : ''}`}
                        href={hasNextPage ? `${path}page/${currentPage + 1}` : '#'}
                        aria-label="Go to Next Page"
                        tabIndex={hasNextPage ? 0 : -1}
                    >
                        <img src='/assets/icons/arrow-page-right.svg' alt='arrow-next' />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Pagination;

