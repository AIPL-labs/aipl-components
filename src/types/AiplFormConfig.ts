export type AiplFormField = {
  description?: string;
  values?: string[];
};

export type AiplFormConfig = {
  fields: Record<string, AiplFormField>;
  papId: string;
  homeUrl: string;
};
