import { landing } from "@/lib/data";



export default function Home() {
  const paragraph_classname = "text-xl text-black/80";

  return (
    <div className="bg-background flex-1 text-black">
      <section>
        <div className="ml-30 mt-30 flex flex-col gap-2 max-w-150">
          <p className="text-6xl font-semibold tracking-tighter">Brandon Mokrytzki</p>
          <p className="text-2xl mb-3">Software Engineer</p>
          <p className={paragraph_classname}>{landing.paragraph_1_v2}</p>
          <p className={paragraph_classname}>{landing.paragraph_2_v1}</p>
          <p className={paragraph_classname}>{landing.paragraph_3_v1}</p>
        </div>
      </section>
    </div>
  );
}
