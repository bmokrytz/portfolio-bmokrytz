import Link from 'next/link';

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
]

export function Navigation() {
    return (
        <div className="bg-background antialiased shrink-0 min-w-[100px] w-max">
            <div className='flex flex-col gap-4 sticky top-10'>
                {navLinks.map((link) => (
                    <Link className='hover:-translate-x-5 hover:text-hover transition-all duration-100 text-lg text-black mr-5 ml-5'
                    key={link.href}
                    href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}