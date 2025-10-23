import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import registrationSchema from './ZodRegistrer.ts'

type RegistrationForm = z.infer<typeof registrationSchema>;
function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegistrationForm>({
        resolver: zodResolver(registrationSchema),
        mode:'onChange',
    });
    const onSubmit = async (data: RegistrationForm) => {
        console.log('Valid data:', data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register('country')} />
                {errors.country && <p className="error">{errors.country.message}</p>}
            </label>
            <label>
                Name:
                <input {...register('zip')} />
                {errors.country && <p className="error">{errors.country.message}</p>}
            </label>
            <button type="submit" disabled={isSubmitting}>{isSubmitting?'Registering...':'Register'}</button>
        </form>
  );
}

export default RegisterForm;