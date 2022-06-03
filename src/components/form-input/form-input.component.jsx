import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/*  esto es como decir 'if label existe' */}
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      {/* aca decimos que si otherProps.value.length existe entonces la clase sera shrink, sino no tendra clase */}
    </Group>
  );
};
export default FormInput;
