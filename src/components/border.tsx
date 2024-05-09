type BorderType = {
  className: string;
};

export default function Border({ className }: BorderType) {
  return <div className={className}></div>;
}
