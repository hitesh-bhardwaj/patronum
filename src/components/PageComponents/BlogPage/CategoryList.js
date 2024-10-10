import Search from '@/components/Search';
import Link from 'next/link';

const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  const categoriesArray = Array.isArray(categories) ? categories : categories?.categories || [];
  const filteredCategories = categoriesArray.filter((category) => category.name !== 'All');

  return (
    <ul className='blog-cati-button flex flex-wrap lg:justify-start lg:gap-[0.7vw] gap-[2vw]'>
      <li key="all" className='fadeUp'>
        <Link href="/blog" className='cat-btn'>
          <button 
            className={activeCategory === 'all' ? 'active' : ''}
            onClick={() => setActiveCategory('all')}
            >
            <span>
              All
            </span>
          </button>
        </Link>
      </li>
      {filteredCategories.map((category) => (
        <li key={category.slug} className='fadeUp'>
          <Link href={`/category/${category.slug}`} className='cat-btn'>
            <button
              className={activeCategory === category.name ? 'active' : ''}
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.name}</span>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
