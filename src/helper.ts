export const printConsoleError = (method: string, input: any) => {
  console.error(`Error from ${method}`);
  console.error(input);
};
