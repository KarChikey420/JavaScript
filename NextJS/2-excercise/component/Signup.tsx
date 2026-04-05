"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-white">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Create account
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Sign up</h1>
          <p className="mt-2 text-sm text-slate-300">
            Enter your details to get started.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-200">Username</span>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-200">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-200">Password</span>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Sign up
          </button>
        </form>

        {submitted ? (
          <p className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            Account details captured for {username || "your account"}.
          </p>
        ) : null}
      </section>
    </main>
  );
}
