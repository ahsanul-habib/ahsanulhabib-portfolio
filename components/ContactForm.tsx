'use client';

import { FormEvent, useState } from 'react';
import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>

      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>

        <form className={styles.form} onSubmit={submitForm}>
          {/* your form inputs */}
        </form>
      </div>
    </div>
  );
}