const handleSubmit = next => e => {
  e.preventDefault();
  next(e.target.email.value);
}

export default ({submit}) => (
  <form onSubmit={handleSubmit(submit)}>
    <label>
      <h4>Ingresá tu email:</h4>
      <input type="email" name="email"/>
    </label>
    <div>
      <button>Ingresar/Registrarse</button>
    </div>
  </form>
)
