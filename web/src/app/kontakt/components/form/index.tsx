'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactSchema } from './contactSchema';
import { ChangeEvent, useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
type FormData = {
  email: string;
  fullName: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(contactSchema) });
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectedOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  const onSubmit = async (data: FormData) => {
    const validData = {
      selectedOption,
      ...data,
    };
    const isValid = Object.values(validData).every((value) => value);
    if (isValid) {
      console.log('All data valid');
    }
  };

  console.log(errors);

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col " htmlFor="email">
        Oppgi din e-postadresse
        <input className="border p-2" type="email" {...register('email')} />
        <div className="min-h-10">
          {errors.email && (
            <span className="flex  items-center gap-2" role="alert">
              <MdErrorOutline size={24} /> {errors.email?.message}
            </span>
          )}
        </div>
      </label>

      <label className="flex flex-col" htmlFor="fullName">
        Fullt navn
        <input className="border p-2" type="text" {...register('fullName')} />
        <label className="flex  items-center gap-2 min-h-10" htmlFor="fullName">
          <div className="min-h-10">
            {errors.fullName && (
              <span className="flex  items-center gap-2" role="alert">
                <MdErrorOutline size={24} /> {errors.fullName?.message}
              </span>
            )}
          </div>
        </label>
      </label>

      <label className="flex flex-col" htmlFor="subject">
        <select
          value={selectedOption}
          onChange={handleSelectedOption}
          className="border p-2"
          name="subject"
          id="subject"
        >
          <option>Velg ett emne</option>
          <option value="question1">T-skjorter</option>
          <option value="question2">Question</option>
          <option value="question3">Question</option>
          <option value="question4">Question</option>
        </select>
      </label>

      <label htmlFor="message">
        <textarea
          className="border w-full p-2"
          rows={5}
          id="message"
          {...register('message')}
        ></textarea>
        <label className="min-h-10" htmlFor="message">
          <div className="min-h-10">
            {errors.message && (
              <span className="flex  items-center gap-2" role="alert">
                <MdErrorOutline size={24} /> {errors.message?.message}
              </span>
            )}
          </div>
        </label>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
