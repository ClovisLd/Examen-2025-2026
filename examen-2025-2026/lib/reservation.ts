"use server";

import { db } from "@/db";
import { reservationsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { integer } from "drizzle-orm/gel-core";
import { PgInteger } from "drizzle-orm/pg-core";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getReservation() {
  return await db.select().from(reservationsTable);
}

export async function addReservation(form: FormData) {
  await db.insert(reservationsTable).values({
    title: String(form.get("title")),
    date: String(form.get("date")),
    phone: String(form.get("time")),
    people: String(form.get("people")),
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function editReservation(form: FormData) {
  await db
    .update(reservationsTable)
    .set({
      title: String(form.get("title")),
      date: String(form.get("date")),
      phone: String(form.get("time")),
    })
    .where(eq(reservationsTable.id, String(form.get("id"))));
  redirect((await headers()).get("referer") ?? "/");
}

export async function removeReservation(id: string) {
  await db.delete(reservationsTable).where(eq(reservationsTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}
