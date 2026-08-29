export default function Home() {
  const paragraph_classname = "text-xl text-black/80";

  return (
    <div className="bg-background flex-1 text-black">
      <section>
        <div className="ml-30 mt-30 flex flex-col gap-2 max-w-150">
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
      </section>
    </div>
  );
}
