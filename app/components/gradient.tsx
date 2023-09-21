import Link from 'next/link';
import React from 'react';

interface GradientProps {
    LinkText: React.ReactNode,
    href: string
    as?: string
}


/**
 *
 * Description: Displays a link with gradient text this is not a complicated component
 * it just a wrapper around next/link.
 * @param LinkText: React.ReactNode
 * @param href: string
 * @param as?: string (optional)
 * @returns Link with gradient text
 */

export default function Gradient({ LinkData }: { LinkData: GradientProps }): React.ReactElement {
    return (
        <Link className="font-extrabold
        bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 bg-clip-text text-transparent"
            href={LinkData.href}
            as={LinkData.as}
        >
            {LinkData.LinkText}
        </Link>
    )
}
