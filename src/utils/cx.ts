type Argv = string | number | boolean | Record<string, unknown> | null | undefined;

export const cx: (...args: Argv[]) => string | undefined = (...args) =>
  args
    .filter((argv) => !!argv)
    .join(' ')
    .trim() || undefined;
