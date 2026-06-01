import { FileQuestion } from 'lucide-react'

function EmptyState({ title = 'Not added yet', message = 'This information will be added soon.' }) {
  return (
    <div className="empty-state">
      <FileQuestion size={28} aria-hidden="true" />
      <strong>{title}</strong>
      <span>{message}</span>
    </div>
  )
}

export default EmptyState
