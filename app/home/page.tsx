import ListImage from "../../public/Lists.png";

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url(${ListImage.src})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    ></div>
  );
}
