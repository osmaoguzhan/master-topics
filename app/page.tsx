import { allTopics } from "@/.contentlayer/generated";
import { randomUUID } from "crypto";
import Link from "next/link";
import SearchBox from "./SearchBox";

function Card({ title, description, slug }: any) {
  return (
    <Link href={slug} className="no-underline" id="card">
      <div className="bg-zinc-800 dark:bg-gray-600 mx-6 rounded-2xl relative h-64 md:h-96 mt-2 hover:scale-105 transition duration-500 shadow-xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              {title}
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-5 text-center text-white md:text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="prose dark:prose-invert grid mt-2 md:grid-cols-2 gap-3">
      <div className="text-center text-gray-600 dark:text-gray-300 col-span-full">
        Click on a topic to learn more about it.
      </div>
      <div className="col-span-full">
        <SearchBox />
      </div>
      {allTopics.map((topic: any) => (
        <Card
          key={randomUUID()}
          title={topic.title}
          description={topic.description}
          slug={topic.slug}
        />
      ))}
    </div>
  );
}
