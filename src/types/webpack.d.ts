interface Require {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): {
    keys(): string[];
    <T = any>(id: string): T;
  };
}

declare var require: Require;
