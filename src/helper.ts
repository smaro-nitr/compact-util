export const printConsoleError = (method: string, input: any) => {
  if (method) return '';
  console.error(`Error from ${method}`);
  console.error(input);
  return '';
};
