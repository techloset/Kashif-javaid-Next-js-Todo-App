import { getServerSession } from "next-auth";
import ListImage from "../public/Lists.png";
export default async function Home() {
  const user = getServerSession();
  console.log(user);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ListImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <div>hello</div>
        </div>
      </div>
    </>
  );
}
