'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { contactShcema } from './schema';

export default function ContactForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: zodResolver(contactShcema) });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col" htmlFor="email">
        Oppgi din e-postadresse
        <input className="border" type="email" {...register('email')} />
      </label>

      <label className="flex flex-col" htmlFor="email">
        Fullt navn
        <input className="border" type="text" {...register('fullName')} />
      </label>

      <label className="flex flex-col" htmlFor="subject">
        <select className="border" name="subject" id="subject">
          <option>Velg ett emne</option>
          <option value="">Question</option>
          <option value="">Question</option>
          <option value="">Question</option>
          <option value="">Question</option>
        </select>
      </label>

      <label htmlFor="message">
        <textarea
          className="border w-full"
          rows={5}
          id="message"
          {...register('message')}
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
