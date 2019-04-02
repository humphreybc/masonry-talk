declare global {
  interface CSS {
    layoutWorklet: {
      addModule: (url: string) => void;
    };
  }
}

export {};
