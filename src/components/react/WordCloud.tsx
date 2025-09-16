import { TagCloud } from "react-tagcloud";

const SimpleCloud = ({
  words,
}: {
  words: { value: string; count: number }[];
}) => {
  const base = import.meta.env.BASE_URL;
  const handleRedirect = (tag: { value: string }) => {
    // Redirect using window.location
    window.location.href = `${base}/tags/${tag.value}`;
  };

  return (
    <TagCloud
      className={"hover:cursor-pointer"}
      minSize={12}
      maxSize={35}
      tags={words}
      shuffle={true}
      colorOptions={{
        luminosity: "bright",
        hue: "orange",
      }}
      onClick={handleRedirect}
    />
  );
};

export default SimpleCloud;
