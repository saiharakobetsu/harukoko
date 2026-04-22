type Props = {
  title: string;
};

export default function PageTitleBar({ title }: Props) {
  return (
    <div className="page-title-bar">
      <h1>{title}</h1>
    </div>
  );
}
