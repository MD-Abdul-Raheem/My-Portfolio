import { Link } from 'react-router-dom'

function GradientButton({
  children,
  to,
  href,
  icon: Icon,
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}) {
  const content = (
    <>
      {Icon && <Icon size={17} aria-hidden="true" />}
      <span>{children}</span>
    </>
  )
  const classes = `gradient-button ${variant} ${disabled ? 'disabled' : ''} ${className}`

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {content}
      </span>
    )
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  )
}

export default GradientButton
