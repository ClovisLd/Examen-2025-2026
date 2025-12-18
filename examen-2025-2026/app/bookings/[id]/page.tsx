"use server";
import { useParams } from "next/navigation";

export default function DynamicRoute() {
  const params = useParams();

  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h2>Dynamic Parameter: {params.data}</h2>
    </div>
  );
}
