"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const validationResult = contactFormSchema.safeParse({ name, email, message });

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors.map((e) => e.message).join(", "),
    };
  }

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });
    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
