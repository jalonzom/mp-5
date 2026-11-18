"use server";

import getCollection, { URLS_COLLECTION } from "@/db";
import type { ShortUrl, ShortenResult } from "@/types/ShortUrl";
import { validateAlias, validateUrl } from "./validation";

export default async function createShortUrl(url: string, alias: string): Promise<ShortenResult> {
    const cleanUrl = url.trim();
    const cleanAlias = alias.trim();

    const urlError = validateUrl(cleanUrl);
    if (urlError) {
        return { error: urlError };
    }
    const aliasError = validateAlias(cleanAlias);
    if (aliasError) {
        return { error: aliasError };
    }

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const existing = await urlsCollection.findOne({ alias: cleanAlias });
    if (existing) {
        return { error: `The alias "${cleanAlias}" is already taken. Please choose another one.` };
    }

    const newShortUrl: ShortUrl = { alias: cleanAlias, url: cleanUrl };
    const res = await urlsCollection.insertOne({ ...newShortUrl });
    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { alias: cleanAlias };
}
