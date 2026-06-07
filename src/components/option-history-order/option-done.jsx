import imgHistory from "../../../src/cardimg1.jpg";
import CardHistoryOrder2 from "./card-history-order2";

export default function OptionDone() {
  return (
    <div className="fill-section">
    <CardHistoryOrder2
          arrivedDate={"26 June"}
          tagline2={"Selesai"}
          imgHistory={imgHistory}
          qtyCard={"1x"}
          sizeCard={"XL, Maroon"}
          price={"Rp. 250,000"}
          orderId={"#id099888"}
        >
          Set Gamis Abaya
        </CardHistoryOrder2>
        </div>
  );
}
