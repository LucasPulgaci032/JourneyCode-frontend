export function FormLogin({ children, ...props }) {
  return (
    <form
      action=""
      className="flex flex-col gap-10 w-full self-center items-center bg-blue-500 p-20 rounded-lg border-solid-2 border-white border-4 animate-glow"
      {...props}
    >
      {children}
    </form>
  );
}
