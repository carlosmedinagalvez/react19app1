import { useState } from 'react'
import TextInput from './TextInput'

function RegistrationForm() {
    const [form, setForm] = useState({ country:'Mexico', zip:'' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }
  return (
      <form>
          <TextInput label="Country" name="country" type="text" value={form.country} onChange={handleChange} />
          <TextInput label="ZIP" name="zip" type="text" value={form.zip} onChange={handleChange} /> 
    </form>
  );
}

export default RegistrationForm;