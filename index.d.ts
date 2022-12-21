declare module "component" {
  type MyFunctionType = (arg: any) => void;
  export interface SelectFieldProps {
    error?: string | any;
    options?: any;
    name: string;
    inputLabel?: string;
    styles?: string;
    defaultValue?: string | any;
    onChange?: MyFunctionType;
    disabled?: boolean;
  }

  export interface ButtonFieldProps {
    disabled?: boolean;
    text?: string | any;
    onClick?: MyFunctionType;
    type?: "submit" | "reset" | "button" | undefined;
  }
}
