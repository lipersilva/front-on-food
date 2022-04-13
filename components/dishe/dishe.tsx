import Styles from "./dishe.module.css";
import { DisheDetails } from "../dishe-details"
import Image from "next/image";

export function Dishe() {
  return(
    <div className={Styles.dishe}>
      <div className={Styles.weapper}>
        <Image src="https://storage.googleapis.com/onfood/peperoni.jpg"  alt="Prato" width={592} height={312}/>
      </div>
      <div>
        <div className={Styles.header}>
          <h2>Nome do Produto</h2>
        </div>
        <div className={Styles.details}>
          <DisheDetails type="reviews" title="(201)" subtitle="4.5" />
          <DisheDetails type="category" title="Categoria"/>
          <DisheDetails type="delivery" title="30 - 40 min"/>
        </div>
      </div>

    </div>
  );
}