interface TextProps {
  before: string;
  textSpan: string;
  after: string;
  pColor?: string;
  spanColor?: string;
}

export default function Text({
  before,
  textSpan,
  after,
  pColor = "text-black",
  spanColor = "text-[#9cff1e]",
}: TextProps) {
  return (
    <p className={`text-lg leading-relaxed ${pColor}`}>
      {before}
      <span className={`font-bold ${spanColor}`}>{textSpan}</span>
      {after}
    </p>
  );
}
