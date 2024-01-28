import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <div>
      <h1>Under Development</h1>
      <p>
          <Image
            src="https://i.giphy.com/media/eexxDzCm3TeMGlouQI/giphy.webp"
            alt="Animated image of a cat coding on a laptop"
            width={400}
            height={400}
          />
      </p>
      <p>
          <Image
            src="https://lufom-readme-stats.vercel.app/api?username=mellolucas&show_icons=true&hide=stars,prs,contribs&show=prs_merged_percentage&locale=en"
            alt="Lucas Mello's GitHub stats card"
            width={600}
            height={200}
          />
      </p>
    </div>
  );
}

export default Home;
