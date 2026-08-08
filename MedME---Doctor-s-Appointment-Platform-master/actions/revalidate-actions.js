"use server";

import { revalidatePath } from "next/cache";

export async function revalidateAfterCreditUpdate() {
  revalidatePath("/doctors");
  revalidatePath("/appointments");
}
