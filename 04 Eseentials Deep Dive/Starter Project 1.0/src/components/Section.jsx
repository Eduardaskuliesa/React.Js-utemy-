import React from 'react'

const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
        <h1>{title}</h1>
        {children}
    </section>
  )
}

export default Section