import React from 'react'

export default function BlogList(){
  const blogs = [
    { title: 'How to Improve Your Credit Score', date: '2023-10-01' },
    { title: 'Personal Loan vs Credit Card', date: '2023-09-15' },
    { title: 'Tips for Debt Consolidation', date: '2023-08-20' }
  ]

  return (
    <section id="blog" className="container">
      <h3 className="section-title">Latest Blog Posts</h3>
      <div className="grid cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="card">
            <h4>{blog.title}</h4>
            <p>{blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
