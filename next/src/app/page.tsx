import Image from "next/image";
import App from "./App";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
        <main className="mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">

            <div className={"min-w-6/12"}>
                <div className={"flex flex-col justify-center items-center mb-5 bg-white p-8 rounded w-full"}>
                    <Image
                        className="dark:lighten"
                        src="/growflow-logo.webp"
                        alt="Grow Flow logomark"
                        width={200}
                        height={20}
                    />
                    <h2 className={"text-gray-700 uppercase font-bold"}>Products</h2>

                </div>
                <App/>
            </div>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <h3>Copyright &copy; GrowFlow 2024</h3>
            </footer>

        </main>

    </div>
  );
}
