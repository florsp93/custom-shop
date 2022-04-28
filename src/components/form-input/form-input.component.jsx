import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/*  esto es como decir 'if label existe' */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {/* aca decimos que si otherProps.value.length existe entonces la clase sera shrink, sino no tendra clase */}
    </div>
  );
};
export default FormInput;
