import GlassCard from './GlassCard'

function DetailInfoPanel({ title, rows }) {
  return (
    <GlassCard className="detail-info-panel">
      <h2>{title}</h2>
      <dl>
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value || 'Not added yet'}</dd>
          </div>
        ))}
      </dl>
    </GlassCard>
  )
}

export default DetailInfoPanel
