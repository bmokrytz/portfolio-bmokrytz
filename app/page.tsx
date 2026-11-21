import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const paragraph_classname = "text-xl text-black/80";

  return (
    <div className="bg-background flex-1 text-black">
      <section className="flex flex-row flex-1">
        <div className="ml-30 mt-30 flex flex-col gap-6 flex-1">
          <p className="text-6xl font-semibold tracking-tighter">Brandon Mokrytzki</p>
          <p className="text-2xl mb-3">Software Engineer</p>
          <p className={paragraph_classname}>
            I am a recent Computer Science graduate from the University of Guelph, 
            passionate about building software and solving problems through code.
          </p>
          <p className={paragraph_classname}>
            I enjoy taking an idea from concept to a working product, overcoming 
            technical challenges along the way, and taking ownership of the code I write. 
            While many of my projects focus on web technologies, I’m interested in 
            software engineering broadly and am open to opportunities beyond web development.
          </p>
          <p className={paragraph_classname}>
            I’m currently looking for my first software engineering role, where I can 
            contribute to real products, take on meaningful challenges, and grow alongside 
            an experienced engineering team.
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-10 items-start ml-30 pl-30 ml-40 mt-30 text-white">
          {/* Projects Link */}
          <Link className="group hover:text-cyan-200 inline-flex items-center justify-center text-lg w-40 bg-gray-700 mt-30 rounded-3xl p-3 transform transition-all duration-300 ease-out hover:shadow-lg hover:translate-x-3 hover:shadow-[-6px_8px_15px_var(--color-terracotta)]"
            key="/projects-2"
            href="/projects">
              <div className="w-40 flex flex-row gap-1 items-center ">
                <div className="relative w-[35px] h-[35px]">
                  <Image 
                    className="object-cover absolute top-1/2 -translate-y-1/2 left-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                    src="/rocket-white.png"
                    width={33}
                    height={33}
                    alt="Rocket ship icon"
                  />
                  <Image 
                    className="object-cover absolute top-1/2 -translate-y-1/2 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="/rocket-cyan.png"
                    width={33}
                    height={33}
                    alt="Rocket ship icon"
                  />
                </div>
                <p>Projects</p>
              </div>
          </Link>
          {/* GitHub Link */}
          <Link className="group hover:text-cyan-200 inline-flex items-center text-lg justify-center w-40 bg-gray-700 rounded-3xl p-3 transform transition-all duration-300 ease-out hover:shadow-lg hover:translate-x-3 hover:shadow-[-6px_8px_15px_var(--color-terracotta)]"
            key="https://github.com/bmokrytz"
            target="_blank"
            href="https://github.com/bmokrytz">
              <div className="w-40 flex flex-row gap-1 items-center align-start ">
                <div className="relative w-[35px] h-[35px]">
                  <Image 
                    className="object-cover absolute top-1/2 -translate-y-1/2 left-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                    src="/github-white.png"
                    width={25}
                    height={25}
                    alt="GitHub Logo"
                  />
                  <Image 
                    className="object-cover absolute top-1/2 -translate-y-1/2 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="/github-cyan.png"
                    width={25}
                    height={25}
                    alt="GitHub Logo"
                  />
                </div>
                <p>GitHub</p>
              </div>
          </Link>
          {/* LinkedIn Link */}
          <Link className="group hover:text-cyan-200 inline-flex items-center text-lg justify-center w-40 bg-gray-700 rounded-3xl p-3 transform transition-all duration-300 ease-out hover:shadow-lg hover:translate-x-3 hover:shadow-[-6px_8px_15px_var(--color-terracotta)]"
            key="https://www.linkedin.com/in/brandon-mokrytzki-79504317b/"
            target="_blank"
            href="https://www.linkedin.com/in/brandon-mokrytzki-79504317b/">
              <div className="w-40 flex flex-row gap-1 items-center align-start ">
                <div className="relative w-[35px] h-[35px]">
                  <Image 
                    className="object-cover absolute top-1/2 -translate-y-1/2 left-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                    src="/linkedin-white.png"
                    width={25}
                    height={25}
                    alt="LinkedIn Logo"
                  />
                  <Image 
                    className="object-cover absolute top-1/2 -translate-y-1/2 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="/linkedin-cyan.png"
                    width={25}
                    height={25}
                    alt="LinkedIn Logo"
                  />
                </div>
                <p>LinkedIn</p>
              </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
