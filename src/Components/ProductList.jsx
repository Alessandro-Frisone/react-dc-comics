import ProductCard from "./ProductCard";
import comics from "../data/comicsData";

export default function ProductList() {
  return (
    <section className="products">
      <div className="container">
      <button className="btn-series">CURRENT SEIRES</button>
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
      <div className="btn-container">
        <button className="btn-load">LOAD MORE</button>
      </div>
    </section>
  );
}
