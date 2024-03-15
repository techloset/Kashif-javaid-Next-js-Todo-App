import ListImage from "../public/Lists.png";
export default function Home() {
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
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            iste at doloremque maiores totam assumenda, explicabo minima in, sed
            beatae facilis dolorum quia quasi, optio sequi. Illum corporis culpa
            dolorum.
          </h1>
        </div>
      </div>
    </>
  );
}
