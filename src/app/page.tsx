import Image from "next/image";
import Counter from "../components/Counter";
import Link from "next/link";
import type { Metadata } from "next";
import Form from 'next/form'

export const metadata: Metadata = {
  title: 'Home | Next-project',
  description: 'Learning Next.js 15',
  openGraph: {
    title: 'Nextjs',
    description: 'I will learn it all',
    images: [
      {
        url: 'https://foto-c.com/assets/banner-BARWlzs9.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: "website"    
  },
};

export default async function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Form action='/react-form-server'>
        <input name="query" />
        <input type="submit" value="Search" />
      </Form>
      <h1>This is the home page!!</h1>
      <Counter/>
      <Link href='/settings/profile'>Go to settings page</Link>
    </div>
  );
}
