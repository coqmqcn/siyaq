import type { ComponentType } from "react";
import * as React from "react";
import * as runtime from "react/jsx-runtime";

type GlobalWithReact = typeof globalThis & { React?: typeof React };
type MDXModule = { default: ComponentType; [key: string]: unknown };

type MDXComponentsProp = { components?: Record<string, ComponentType> };

type MdxProps = {
  code: string;
  components?: Record<string, ComponentType>;
};

export function Mdx({ code, components }: MdxProps) {
  const globalScope = globalThis as GlobalWithReact;
  const previous = globalScope.React;
  globalScope.React = React;
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const module = new Function(code)(runtime) as MDXModule;
    const Component = module.default as ComponentType<MDXComponentsProp>;
    return <Component components={components} />;
  } finally {
    if (previous) {
      globalScope.React = previous;
    } else {
      Reflect.deleteProperty(globalScope, "React");
    }
  }
}