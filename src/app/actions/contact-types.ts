export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Partial<
    Record<"name" | "email" | "organization" | "message", string[]>
  >;
};

export const contactActionInitialState: ContactActionState = {
  success: false,
  message: "",
};
