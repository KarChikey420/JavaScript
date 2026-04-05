"use client";

import { FormEvent, useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Request failed");
      }

      console.log(data.message);
      setStatusMessage(data.message);
      setUsername("");
      setPassword("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      console.error("Signup failed:", message);
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-slate-300 p-6 shadow-sm"
      >
        <h1 className="text-2xl font-semibold">Signup</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-slate-900 px-4 py-2 text-white disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {statusMessage ? <p className="text-sm text-slate-700">{statusMessage}</p> : null}
      </form>
    </main>
  );
}
