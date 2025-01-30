import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <section className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
