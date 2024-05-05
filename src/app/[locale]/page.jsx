import MainHeadings from "./templete";

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
