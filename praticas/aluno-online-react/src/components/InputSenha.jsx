import "tailwindcss";

function InputSenha({ label, value, onChange, error, placeholder = 'Digite seu e-mail' }) {
  return (
    <fieldset className="input-group">
      <label htmlFor="senha">{label}</label>
      <input
        type="senha"
        id="senha"
        name="senha"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
      />
      {error && <small className="error-message">{error}</small>}
    </fieldset>
  )
}

export default InputSenha;
