import Button from '../Button';
import InputText from '../InputText';

const handleSubmit = next => e => {
  e.preventDefault();
  next(e.target.email.value);
}

export default ({submit}) => (
  <form onSubmit={handleSubmit(submit)}>
    <label>
      <InputText type="email" name="email" label="Ingresá tu email:"/>
    </label>
    <div>
      <Button>Ingresar/Registrarse</Button>
    </div>
  </form>
)
