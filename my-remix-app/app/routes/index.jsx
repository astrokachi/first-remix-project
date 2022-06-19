import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  const use = user?.email.split("@");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-100">
          Welcome to your AI writing assistant
        </h1>
        {user ? (
          <div className="mx-auto mt-4 flex w-full justify-between px-20 text-slate-200">
            <p className="text-slate-300">Welcome {use[0]}</p>
            <div className="flex gap-5">
            <Link to="/writing" className="rounded  bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500">Start writing</Link>
            <Form action="/logout" method="post">
              <button
                type="submit"
                className="rounded  bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500"
              >
                Logout
              </button>
            </Form>
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center p-4 text-slate-200">
            <div className="flex gap-3">
              <Link
                to="/join"
                className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500"
              >
                Join
              </Link>
              <Link
                to="/login"
                className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
