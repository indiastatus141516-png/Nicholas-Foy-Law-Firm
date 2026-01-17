import React, { useEffect, useState } from 'react'

export default function Stats(){
  const [counts, setCounts] = useState({ loans: 0, amount: 0, rate: 0 })

  useEffect(() => {
    // Animate counters
    const target = { loans: 10000, amount: 50000000, rate: 95 }
    const duration = 2000
    const step = 50
    const steps = duration / step
    const increment = {
      loans: target.loans / steps,
      amount: target.amount / steps,
      rate: target.rate / steps
    }
    let current = { loans: 0, amount: 0, rate: 0 }
    const timer = setInterval(() => {
      current.loans += increment.loans
      current.amount += increment.amount
      current.rate += increment.rate
      setCounts({
        loans: Math.floor(current.loans),
        amount: Math.floor(current.amount),
        rate: Math.floor(current.rate)
      })
      if (current.loans >= target.loans) clearInterval(timer)
    }, step)
  }, [])

  return (
    <section id="stats" className="container">
      <h3 className="section-title">Our Stats</h3>
      <div className="grid cols-3">
        <div className="card">
          <h4>{counts.loans.toLocaleString()}+</h4>
          <p>Loans Approved</p>
        </div>
        <div className="card">
          <h4>${counts.amount.toLocaleString()}</h4>
          <p>Total Amount Lent</p>
        </div>
        <div className="card">
          <h4>{counts.rate}%</h4>
          <p>Approval Rate</p>
        </div>
      </div>
    </section>
  )
}
