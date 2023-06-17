import { notFound } from "next/navigation";
import { allTopics } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface TopicsProp {
  params: {
    slug: string[];
  };
}

async function getTopicFromParams(params: TopicsProp["params"]) {
  const slug = params?.slug?.join("/");
  const topic = allTopics.find((topic) => topic.slugAsParams === slug);
  if (!topic) return null;

  return topic;
}

export async function generateMetadata({
  params,
}: TopicsProp): Promise<Metadata> {
  const topic = await getTopicFromParams(params);
  if (!topic) return {};
  return {
    title: topic.title,
    description: topic.description,
  };
}

export async function generateStaticParams(): Promise<TopicsProp["params"][]> {
  return allTopics.map((topic) => ({
    slug: topic.slugAsParams.split("/"),
  }));
}

export default async function TopicPage({ params }: TopicsProp) {
  const topic = await getTopicFromParams(params);
  if (!topic) return notFound();

  return (
    <article className="py-6 prose dark:prose-invert">
      <Mdx code={topic.body.code} />
    </article>
  );
}
