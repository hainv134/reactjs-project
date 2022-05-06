import clsx from "clsx";
import React from "react";
import style from "./content.module.scss";

interface Props {
  desc: string;
  address: string;
  quote: string;
}
const Contact: React.FC<Props> = ({ address, desc, quote }) => {
  return (
    <div className={clsx(style.contactWrapper)}>
      <p className={clsx(style.desc)}> {desc} </p>
      <address className={clsx(style.address)}> {address} </address>
      <p className={clsx(style.quote)}> {quote} </p>
      <form className={clsx(style.form)}>
        <input type="text" placeholder="Name" required name="name" />
        <input
          type="number"
          placeholder="How many people"
          required
          name="people"
        />
        <input
          type="datetime-local"
          name="date"
          required
          placeholder="Date and Time"
        />
        <input
          type="text"
          placeholder="Message \ Special requirements"
          required
          name="Message"
        />
        <button className={clsx(style.submit)} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
