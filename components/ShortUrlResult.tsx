export default function ShortUrlResult(props: { shortUrl: string }) {
    return (
        <div role="status" className="mt-4 border-3 border-brand-rose bg-brand-light p-4 text-brand-rose">
            <p className="mb-2 font-bold">Your short URL is ready to copy and share:</p>
            <a href={props.shortUrl} className="break-all underline">{props.shortUrl}</a>
        </div>
    );
}
