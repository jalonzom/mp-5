import React from "react";

export default function StatusMessage(props: { title: string; message?: string; children?: React.ReactNode }) {
    return (
        <div role="status" className="mx-auto my-8 max-w-2xl p-4 text-center">
            <h2 className="my-2 text-2xl font-bold text-brand-rose">{props.title}</h2>
            {props.message && <p className="mb-2">{props.message}</p>}
            {props.children}
        </div>
    );
}
