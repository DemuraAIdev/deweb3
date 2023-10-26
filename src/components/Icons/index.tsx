// Icons taken from: https://simpleicons.org/
import Mail from "./mail.svg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";
import Link from "next/link";

interface ComponentProps {
    [kind: string]: any;
}
const components: { [kind: string]: any } = {
    mail: Mail,
    github: Github,
    twitter: Twitter,
};

interface Props {
    kind: keyof ComponentProps;
    href: string;
    size?: number;
}

const SocialIcon = ({ kind, href, size = 8 }: Props) => {
    if (!href) return null;

    const SocialSvg = components[kind];

    return (
        <Link
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={`fill-current text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 h-${size} w-${size}`}
            />
        </Link>
    );
};

export default SocialIcon;