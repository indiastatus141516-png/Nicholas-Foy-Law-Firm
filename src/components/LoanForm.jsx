import React from 'react'
import { useForm } from 'react-hook-form'

export default function LoanForm(){
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Submit to backend API
  }

  return (
    <section id="loan-form" className="container">
      <h3 className="section-title">Apply for Your Loan</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div className="grid cols-2">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input {...register('firstName', { required: true })} id="firstName" />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input {...register('lastName', { required: true })} id="lastName" />
            {errors.lastName && <span>This field is required</span>}
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email', { required: true })} id="email" type="email" />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="loanAmount">Loan Amount ($)</label>
          <input {...register('loanAmount', { required: true, min: 1000, max: 50000 })} id="loanAmount" type="number" />
          {errors.loanAmount && <span>Amount between 1000 and 50000</span>}
        </div>
        <div>
          <label htmlFor="purpose">Purpose</label>
          <select {...register('purpose')} id="purpose">
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="debt">Debt Consolidation</option>
          </select>
        </div>
        <button type="submit" className="btn primary">Submit Application</button>
      </form>
    </section>
  )
}
