import { notFound, redirect } from "next/navigation";
import getUrlByAlias from "@/lib/getUrlByAlias";

export const dynamic = "force-dynamic";

export default async function AliasRedirect({ params }: { params: Promise<{ alias: string }> }) {
    const { alias } = await params;
    const url = await getUrlByAlias(alias);

    if (!url) {
        notFound();
    }

    redirect(url);
}
