import { allTopics } from "@/.contentlayer/generated";
import { randomUUID } from "crypto";
import { Kanit } from "next/font/google";
import Link from "next/link";
const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

function Card({ title, description, slug, date, asked }: any) {
  return (
    <Link href={slug} className={`no-underline`} id="card">
      <div className="bg-zinc-800 dark:bg-gray-300 mx-6 rounded-2xl relative h-64 md:h-80 mt-2 hover:scale-105 transition duration-500 shadow-xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <div className="p-6 md:p-12">
            <h2
              className={`font-serif text-xl font-medium text-center text-white dark:text-black md:text-left  ${kanit.className}`}
            >
              {title}
            </h2>
            <p className="max-w-xs my-4 text-md leading-5 tracking-5 text-center text-zinc-200 dark:text-zinc-800 md:text-left">
              {description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-6">
          📅
          <span className="font-medium text-lime-100 dark:text-lime-800">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 p-6 text-white dark:text-black text-4xl">
          {asked > 0 ? "🔥" : ""}
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  allTopics.sort((a: any, b: any) => {
    return b.asked - a.asked;
  });
  return (
    <div className="prose dark:prose-invert grid mt-2 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full">
      <div className="text-center text-gray-600 dark:text-gray-300 col-span-full text-4xl">
        University of Łódź Master&apos;s Exam Topics
      </div>
      <div className="text-center text-gray-600 dark:text-gray-300 col-span-full">
        Click on a topic to learn more about it.
      </div>
      {allTopics.map((topic: any) => (
        <Card
          key={randomUUID()}
          title={topic.title}
          description={topic.description}
          slug={topic.slug}
          date={topic.date}
          asked={topic.asked}
        />
      ))}
    </div>
  );
}
