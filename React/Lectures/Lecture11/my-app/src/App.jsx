import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve , 5000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First name: </label>
        <input 
        className={errors.firstname ? 'input-error' : ""}
        {...register('firstname' , 
          {
            required: true, 
            minLength:{value:3 , message: "Min length AtLeast 3"}, 
            maxLength:{value:8 , message: "Max length AtMost 8"}
          })} />
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
      </div>
      <div>
        <label>Middle name: </label>
        <input 
        className={errors.middlename ? 'input-error' : ""}
        {...register('middlename')} />
      </div>
      <div>
        <label>Last name: </label>
        <input 
        className={errors.lastname ? 'input-error' : ""}
        {...register('lastname' , {
          value: /^[A-Za-z]+$/i ,
          message: "Last name is not as per the rules"
        })} />
        {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  );
}

export default App;
