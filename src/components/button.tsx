type ButtonVarient = "contain" | "outline" | "text";

type ButtonProps = {
  varient: ButtonVarient;
  className: string;
  children?: React.ReactNode;
  handleClicked: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  varient,
  className,
  children,
  handleClicked
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${className} ${varient === "contain" ? "varient-contain" : varient === "outline" ? "varient-outline" : "varient-text"}`}
      onClick={handleClicked}
    >
      {children}
    </button>
  );
}
