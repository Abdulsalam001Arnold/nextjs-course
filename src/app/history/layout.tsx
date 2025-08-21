
import Link from "next/link";
import React from "react";
export default function layout({analytics, tasks, children}: Readonly<{children: React.ReactNode, analytics: React.ReactNode, tasks: React.ReactNode}>) {
    const loggedIn = true
    return(
        <>
        {loggedIn ? (
            <main className="flex flex-col md:flex-row lg:flex-row">
                <div>{children}</div>
                <div className="w-1/2 bg-white transition duration-300 hover:bg-gray-200 border border-black">
                    {analytics}
                </div>
                <div className="w-1/2 bg-white transition duration-150 hover:bg-gray-200 border text-black border-black">
                    {tasks}
                </div>
            </main>

        ): (
            <div>
                User not logged in, please login into your app <Link href='/login'>Click to log in</Link>
            </div>
        )}
        </>
    )
};
