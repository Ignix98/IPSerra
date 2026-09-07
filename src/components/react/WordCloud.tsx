import { TagCloud } from "react-tagcloud";

type Word = { id: string; value: string; count: number; href: string };

export default function WordCloud({ words }: { words: Word[] }) {
  const byId = new Map(words.map(word => [word.id, word]));
  return (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={words.map(word => ({ value: word.id, count: word.count }))}
      shuffle={false}
      renderer={(tag, size) => {
        const word = byId.get(tag.value);
        return word ? (
          <a key={word.id} href={word.href}
            style={{ fontSize: size }}
            className="m-2 inline-block text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {word.value}
          </a>
        ) : <></>;
      }}
    />
  );
}
