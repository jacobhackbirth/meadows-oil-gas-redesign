'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please describe your project (10+ characters)'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  'Leasehold Acquisitions',
  'Title Opinions',
  'Title Curative Work',
  'Right-of-Ways',
  'Wind Leasing',
  'GIS & Mapping',
  'Due Diligence',
  'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  backgroundColor: '#fff',
  border: '1.5px solid rgba(0,0,0,0.12)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.875rem',
  color: '#000',
  outline: 'none',
  borderRadius: '0',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-display)',
  fontSize: '0.6rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(0,0,0,0.55)',
  marginBottom: '0.5rem',
}

export default function ContactForm({ formEndpoint, defaultService }: { formEndpoint: string; defaultService?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService ?? '' },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8" style={{ backgroundColor: '#fff', borderTop: '3px solid var(--color-brand-gold)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#000', marginBottom: '0.5rem' }}>Message Received</h3>
        <p className="text-sm" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}>
          Thank you. A career landman will respond the same business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={labelStyle}>Full Name *</label>
          <input id="name" type="text" autoComplete="name" style={{ ...inputStyle, borderColor: errors.name ? 'rgb(220,38,38)' : 'rgba(0,0,0,0.12)' }} {...register('name')} />
          {errors.name && <p className="mt-1 text-xs" style={{ color: 'rgb(220,38,38)', fontFamily: 'var(--font-sans)' }}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input id="email" type="email" autoComplete="email" style={{ ...inputStyle, borderColor: errors.email ? 'rgb(220,38,38)' : 'rgba(0,0,0,0.12)' }} {...register('email')} />
          {errors.email && <p className="mt-1 text-xs" style={{ color: 'rgb(220,38,38)', fontFamily: 'var(--font-sans)' }}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone</label>
          <input id="phone" type="tel" autoComplete="tel" style={inputStyle} {...register('phone')} />
        </div>
        <div>
          <label htmlFor="service" style={labelStyle}>Service *</label>
          <select id="service" style={{ ...inputStyle, borderColor: errors.service ? 'rgb(220,38,38)' : 'rgba(0,0,0,0.12)', cursor: 'pointer' }} {...register('service')}>
            <option value="">Select a service</option>
            {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="mt-1 text-xs" style={{ color: 'rgb(220,38,38)', fontFamily: 'var(--font-sans)' }}>{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Project Description *</label>
        <textarea
          id="message"
          rows={6}
          placeholder="Describe your project: state, county, scope, timeline, and any known complications..."
          style={{ ...inputStyle, borderColor: errors.message ? 'rgb(220,38,38)' : 'rgba(0,0,0,0.12)', resize: 'vertical' }}
          {...register('message')}
        />
        {errors.message && <p className="mt-1 text-xs" style={{ color: 'rgb(220,38,38)', fontFamily: 'var(--font-sans)' }}>{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm" style={{ color: 'rgb(220,38,38)', fontFamily: 'var(--font-sans)' }}>
          Something went wrong. Please try again or call us at 405.285.8500.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          backgroundColor: status === 'sending' ? 'rgba(200,146,26,0.6)' : 'var(--color-brand-gold)',
          color: '#000', border: 'none', padding: '1rem 2.5rem', cursor: status === 'sending' ? 'wait' : 'pointer',
          borderRadius: '9999px', alignSelf: 'flex-start',
        }}
      >
        {status === 'sending' ? 'Sending…' : 'Send Inquiry →'}
      </button>
    </form>
  )
}
