import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-brand-rose px-4 py-2">
            <h1 className="my-2 text-2xl font-bold md:text-3xl">
                <Link href="/" className="text-brand-cream">CS303 URL Shortener</Link>
            </h1>
        </header>
    );
}
