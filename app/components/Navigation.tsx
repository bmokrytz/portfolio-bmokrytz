import Link from 'next/link';

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
]

export function Navigation() {
    return (
        <div className="bg-transparent antialiased flex flex-col gap-4 fixed right-0 m-7 p-3">
            {navLinks.map((link) => (
                <Link className='hover:-translate-x-5 hover:text-hover transition-all duration-100 text-lg text-black'
                key={link.href}
                href={link.href}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}