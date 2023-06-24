'use client';

export default function CodeSnipet({ children }) {
    return (
        <pre>
            <code>{children}</code>
        </pre>
    );
}
