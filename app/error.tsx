"use client";

import StatusMessage from "@/components/StatusMessage";
import buttonStyling from "@/components/buttonStyling";

export default function Error({ retry }: { retry: () => void }) {
    return (
        <StatusMessage
            title="Something went wrong"
            message="We could not reach the database. Please try again in a moment."
        >
            <button className={`mt-2 ${buttonStyling}`} onClick={() => retry()}>Try again</button>
        </StatusMessage>
    );
}
