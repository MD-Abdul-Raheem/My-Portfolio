import { motion } from 'framer-motion'

function GlassCard({ as: Component = 'div', className = '', children, hover = true, ...props }) {
  return (
    <motion.div
      className={`glass-card ${hover ? 'hover-card' : ''} ${className}`}
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      {...props}
    >
      {Component === 'div' ? children : <Component>{children}</Component>}
    </motion.div>
  )
}

export default GlassCard
