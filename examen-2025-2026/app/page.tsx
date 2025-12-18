import { link } from "fs";
import Image from "next/image";
import {
  getReservation,
  addReservation,
  editReservation,
  removeReservation,
} from "../lib/reservation";

export default function Home() {
  return (
    <div>
      <h1>Restaurant</h1>

      <h1 className="">carte</h1>
      <ul>
        <li>pate</li>
        <li>lasagne</li>
      </ul>
      <br />

      <div>
        <form action={addReservation}>
          <label>
            What's you're name
            <input name="title" />
          </label>
          <br />
          <label>
            when would you like to reserve
            <input name="date" />
          </label>
          <br />
          <label>
            what's you're phone number
            <input name="phone" />
          </label>
          <br />
          <label>
            how many are you
            <input name="people" />
          </label>
          <br />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}
