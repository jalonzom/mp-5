"use client";

import React, { useState } from "react";
import createShortUrl from "@/lib/createShortUrl";
import { validateAlias, validateUrl } from "@/lib/validation";
import buttonStyling from "./buttonStyling";
import ShortUrlResult from "./ShortUrlResult";

export default function ShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const labelStyling = "mt-2 font-bold text-brand-rose";
    const inputStyling = "min-w-0 border-3 border-brand-blue bg-brand-light p-2.5 text-base";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setShortUrl("");

        const urlError = validateUrl(url.trim());
        if (urlError) {
            setError(urlError);
            return;
        }
        const aliasError = validateAlias(alias.trim());
        if (aliasError) {
            setError(aliasError);
            return;
        }

        createShortUrl(url, alias)
            .then((result) => {
                if (result.error) {
                    setError(result.error);
                } else {
                    setShortUrl(`${window.location.origin}/${result.alias}`);
                    setUrl("");
                    setAlias("");
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Something went wrong. Please try again.");
            });
    }

    return (
        <section className="m-4 max-w-2xl border-4 border-brand-rose bg-brand-pink p-4 md:mx-auto md:my-8 md:p-6">
            <h2 className="mb-1 text-center text-3xl font-bold text-brand-rose">Shorten a URL</h2>
            <p className="mb-4 text-center">Enter a long URL and choose an alias to create a short, shareable link</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="url" className={labelStyling}>URL</label>
                <input
                    id="url"
                    type="text"
                    placeholder="https://example.com/very/long/url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className={inputStyling}
                />
                <label htmlFor="alias" className={labelStyling}>Custom Alias</label>
                <input
                    id="alias"
                    type="text"
                    placeholder="your-custom-alias"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    className={inputStyling}
                />
                <button type="submit" disabled={url === "" || alias === ""} className={`mt-4 ${buttonStyling}`}>
                    Shorten
                </button>
            </form>
            {error && (
                <p role="alert" className="mt-4 border-3 border-red-800 bg-brand-cream p-2.5 text-red-800">
                    {error}
                </p>
            )}
            {shortUrl && <ShortUrlResult shortUrl={shortUrl} />}
        </section>
    );
}
