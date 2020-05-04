type Argv = string | number | boolean | object | null | undefined;

export const cx: (...args: Argv[]) => string | undefined = (...args) =>
  args
    .filter((argv) => !!argv)
    .join(' ')
    .trim() || undefined;
