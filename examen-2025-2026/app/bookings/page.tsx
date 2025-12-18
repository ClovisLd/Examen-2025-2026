import {
  getReservation,
  addReservation,
  editReservation,
  removeReservation,
} from "../../lib/reservation";

export default async function Page() {
  const reservations = await getReservation();
  return (
    <>
      <ul>
        {reservations.map((reservation, id) => (
          <div key={reservation.id || id}>
            <li>
              {reservation.title} id: {reservation.id}
            </li>
          </div>
        ))}
        <p>salut les copains</p>
      </ul>
    </>
  );
}
