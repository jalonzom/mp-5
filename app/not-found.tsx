import Link from "next/link";
import StatusMessage from "@/components/StatusMessage";
import buttonStyling from "@/components/buttonStyling";

export default function NotFound() {
    return (
        <StatusMessage title="Link not found" message="This short link doesn't exist. Check the spelling, or create it yourself.">
            <Link href="/" className={`mt-2 inline-block ${buttonStyling}`}>Shorten a URL</Link>
        </StatusMessage>
    );
}
