export default function Button(props: { title: string }) {
  return (
    <div className="flex justify-center mt-[19px] ">
      <button className="bg-orange-500 w-[447px] h-[63px] rounded-full">
        <h1 className="font-medium text-3xl">{props.title}</h1>
      </button>
    </div>
  );
}
