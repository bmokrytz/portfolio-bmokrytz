import heroImage from "@/lib/images/hero.jpg";
import campfireImage from "@/lib/images/algonquin-campfire.jpg";
import rainLakeImage from "@/lib/images/rain-lake.jpg";
import Image from 'next/image';

export default function About() {
    const paragraph_classname = "text-lg max-w-150 mb-5";
    const subtitle_classname = "text-2xl mt-10 mb-5";
    return (
        <div className="bg-background flex-1">
            <section className="flex flex-row ml-30 mb-30 mt-30">
                <div className="text-black flex-1 min-w-150">
                    <p className="text-6xl">About Me</p>
                    <p className="text-2xl mt-10 mb-10">Hi, I'm Brandon.</p>
                    <p className={paragraph_classname}>
                        I'm a Computer Science graduate from the University of Guelph, 
                        but I didn't take the traditional path into software engineering.
                    </p>
                    <p className={paragraph_classname}>
                        I originally studied Biological Science with the goal of becoming a 
                        veterinarian. Somewhere along the way, I discovered how much I enjoyed 
                        programming and started exploring computer science more seriously. That 
                        eventually led me to change direction and pursue a second degree in 
                        Computer Science.
                    </p>
                    <p className={paragraph_classname}>
                        It was a big change, but I've never regretted it. I found something I 
                        genuinely enjoy doing, and I love the process of taking an idea, figuring 
                        out how to build it, and working through the problems that inevitably come 
                        along the way.
                    </p>
                    <p className={subtitle_classname}>How I Work</p>
                    <p className={paragraph_classname}>
                        I'm naturally persistent when I run into a problem. If I don't know how to 
                        do something, I'll figure out what I need to learn and keep working until I 
                        understand it. I'm comfortable working independently and figuring things out 
                        for myself, but I also enjoy working with other people and bringing different 
                        perspectives together.
                    </p>
                    <p className={paragraph_classname}>
                        I try to be someone who's easy to work with. I get along with people from 
                        all kinds of backgrounds, and I value being approachable, open-minded, and 
                        willing to listen.
                    </p>
                    <p className={subtitle_classname}>Outside of Code</p>
                    <p className={paragraph_classname}>
                        I love reading science fiction, with Isaac Asimov's <em>Foundation</em> series 
                        and Frank Herbert's <em>Dune</em> series being among my favorites.
                    </p>
                    <p className={paragraph_classname}>
                        I'm also an avid gamer, with <em>World of Warcraft</em>, <em>The Witcher 3</em>, 
                        and <em>Valheim</em> among some of my favorite games.
                    </p>
                    <p className={paragraph_classname}>
                        When I'm not at a computer, you'll probably find me somewhere outside. I enjoy 
                        hiking and camping, especially in Algonquin Park. I've done both car camping 
                        and backcountry portaging, and I love getting away from everything and spending 
                        time in nature. I also have a soft spot for animals and enjoy pretty much any 
                        excuse to be around them.
                    </p>
                    <p className={paragraph_classname}>
                        More recently, I've gotten into archery and have been working on improving my 
                        skills at the range.
                    </p>
                    <p className={paragraph_classname}>
                        And, of course, no matter what I am doing there's usually a cup of coffee involved somewhere.
                    </p>
                </div>
                <div className="block">
                    <Image 
                    alt='Hero image of Brandon Mokrytzki smiling in front of a tree.' 
                    src={heroImage}
                    className="rounded-2xl mt-10 ml-10 w-[300px] h-auto mr-70"
                    />
                    <div className="flex flex-row">
                        <Image 
                        alt='Photo of a campfire during a camping trip in Algonquin Park.' 
                        src={campfireImage}
                        className="rounded-2xl mt-10 mr-5 w-auto h-auto max-w-[300px]"
                        />
                        <Image 
                        alt='Photo of Rain Lake in Algonquin Park.' 
                        src={rainLakeImage}
                        className="rounded-2xl mt-10 w-auto h-auto max-w-[300px]"
                        />
                    </div>
                        
                </div>
                
            </section>
            
        </div>
    );
}