function BadgeFilter({ items, active, onChange, ariaLabel = 'Filter items' }) {
  return (
    <div className="badge-filter" role="tablist" aria-label={ariaLabel}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={active === item ? 'active' : ''}
          onClick={() => onChange(item)}
          role="tab"
          aria-selected={active === item}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default BadgeFilter
