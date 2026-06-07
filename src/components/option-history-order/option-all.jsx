import CardHistoryOrder from "./card-history-order";
import imgHistory from "../../../src/cardimg1.jpg";
import CardHistoryOrder2 from "./card-history-order2";

export default function OptionAll() {
  return (
    <div className="fill-section">
      <CardHistoryOrder
        arrivedDate={"25 May"}
        tagline={"Perjalanan"}
        imgHistory={imgHistory}
        qtyCard={"1x"}
        sizeCard={"XL, Maroon"}
        price={"Rp. 250,000"}
        orderId={"#id099888"}
      >
        Set Gamis Abaya
      </CardHistoryOrder>
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
