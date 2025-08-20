import MainHeadings from "./template";

export default function Home() {
  return (
    <>
      <MainHeadings />
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Home",
  };
}
