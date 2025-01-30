import ProductCard from "./ProductCard";
import comics from "../data/comicsData";

export default function ProductList() {
  return (
    <section className="products">
      <div className="container">
        <div className="row">
          {comics.map((elm) => {
            return (
              <div className="col" key={comics.id}>
                <ProductCard image={elm.thumb} title={elm.series} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
