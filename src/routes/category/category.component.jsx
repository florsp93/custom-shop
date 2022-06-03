import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryDiv, CategoryTitle } from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryDiv>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryDiv>
    </Fragment>
  );
};

export default Category;
