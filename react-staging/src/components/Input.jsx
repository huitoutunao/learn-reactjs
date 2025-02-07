export default function Input({ value, onChange }) {
  return <input value={value} onChange={e => (onChange && onChange(e.target.value))} className="input" />
}

Input.displayName = 'input'
