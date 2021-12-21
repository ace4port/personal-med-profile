import React from 'react'

const CategoriesCard = ({ categories = ['Tech', 'Programming', 'Uncategorized'] }) => {
  return (
    <div className="card categoriesCard">
      <h4>Post Categories</h4>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesCard
