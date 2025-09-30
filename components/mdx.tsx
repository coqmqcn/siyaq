import * as runtime from "react/jsx-runtime";
export function Mdx({ code }: { code: string }) {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const MDX = new Function(code)(runtime);
  // @ts-expect-error MDX returns a component
  return <MDX />;
}
