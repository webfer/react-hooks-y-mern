import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    // const item = 'Valorant';
    // setCategories((cat) => [...cat, item]); // Other valit way
    if (categories.includes(newCategory)) return; // Validation for avoid duplicate categories
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
