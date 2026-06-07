import CardHistoryOrder from "./card-history-order";
import imgHistory from "../../../src/cardimg1.jpg";

export default function OptionOngoing() {
  return (
    <div className="fill-section">
    <CardHistoryOrder
      arrivedDate={"26 May"}
      tagline={"Perjalanan"}
      imgHistory={imgHistory}
      qtyCard={"1x"}
      sizeCard={"XL, Maroon"}
      price={"Rp. 250,000"}
      orderId={"#id099888"}
    >
      Set Gamis Abaya
    </CardHistoryOrder>
    </div>
  );
}
