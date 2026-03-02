interface TextProps {
  before?: string;
  textSpan?: string;
  after?: string;
  pColor?: string;
  spanColor?: string;
}

export default function Text({
  before,
  textSpan,
  after,
  pColor,
  spanColor,
}: TextProps) {
  return (
    <p className={`text-lg leading-relaxed ${pColor}`}>
      {before}
      <span className={`font-bold ${spanColor}`}>{textSpan}</span>
      {after}
    </p>
  );
}
