import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({ as: Tag = 'div', children, className = '', style, ...props }) {
  const ref = useScrollReveal()
  return (
    <Tag ref={ref} className={`reveal${className ? ` ${className}` : ''}`} style={style} {...props}>
      {children}
    </Tag>
  )
}
