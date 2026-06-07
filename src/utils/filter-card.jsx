import CardProduct from "../components/card-product";
import CardProductDsc from "../components/card-product-dsc";

export function filterCard(data) {
  return data.map((item) =>
    item.discount ? (
      <CardProductDsc
        key={item.id}
        id={item.id}
        dscBadge={`- ${item.discount}%`}
        oriPrice={`Rp.${item.originalPrice.toLocaleString("id-ID")}`}
        dscPrice={`Rp.${item.price.toLocaleString("id-ID")}`}
        imgDisc={item.image}
      >
        {item.name}
      </CardProductDsc>
    ) : (
      <CardProduct
        key={item.id}
        id={item.id}
        category={item.category}
        price={`Rp.${item.price.toLocaleString("id-ID")}`}
        imgCard={item.image}
      >
        {item.name}
      </CardProduct>
    ),
  );
}
