export default function Button(props: {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex justify-center mt-[19px]">
      <button
        className="bg-orange-500 w-[447px] h-[63px] rounded-full"
        onClick={props.onClick}
      >
        <h1 className="font-medium text-30px">{props.title}</h1>
      </button>
    </div>
  );
}
