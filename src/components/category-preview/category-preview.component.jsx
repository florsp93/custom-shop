import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewDiv,
  CategoryTitle,
  PreviewGrid,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewDiv>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>
      <PreviewGrid>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewGrid>
    </CategoryPreviewDiv>
  );
};

export default CategoryPreview;
