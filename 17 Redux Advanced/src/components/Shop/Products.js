import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCST = [
  { id: "p1", price: 6, title: "My first Book", description: "The first book" },
  {
    id: "p2",
    price: 6,
    title: "My second Book",
    description: "The second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCST.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
