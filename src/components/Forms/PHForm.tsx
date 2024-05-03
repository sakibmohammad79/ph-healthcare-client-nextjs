import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type IFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const PHForm = ({ children, onSubmit }: IFormProps) => {
  const methods = useForm();

  const submit = (data: FieldValues) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
