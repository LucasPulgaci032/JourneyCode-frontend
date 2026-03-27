export function InputLogin({ type, ...props }) {
  return (
    <input type={type} className="rounded-lg p-2 bg-blue-200  md:w-full" {...props} />
  );
}
