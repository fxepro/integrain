// Shared form field primitives
const base = "w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"

export function TextInput({ label, name, required, placeholder }: { label: string, name: string, required?: boolean, placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <input type="text" name={name} required={required} placeholder={placeholder || label} className={base} />
    </div>
  )
}

export function EmailInput({ label, name, required }: { label: string, name: string, required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <input type="email" name={name} required={required} placeholder="email@example.com" className={base} />
    </div>
  )
}

export function PhoneInput({ label, name, required }: { label: string, name: string, required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <input type="tel" name={name} required={required} placeholder="+1 (555) 000-0000" className={base} />
    </div>
  )
}

export function TextArea({ label, name, required, rows = 4 }: { label: string, name: string, required?: boolean, rows?: number }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <textarea name={name} required={required} rows={rows} className={base + " resize-none"} />
    </div>
  )
}

export function SelectInput({ label, name, required, options }: { label: string, name: string, required?: boolean, options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <select name={name} required={required} className={base}>
        <option value="">Select one...</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

export function RangeInput({ label, name, min = 0, max = 100000, step = 1000 }: { label: string, name: string, min?: number, max?: number, step?: number }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type="range" name={name} min={min} max={max} step={step} className="w-full accent-brand-green" />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{min.toLocaleString()}</span><span>{max.toLocaleString()}</span>
      </div>
    </div>
  )
}

export function Checkbox({ label, name, required }: { label: string, name: string, required?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      <input type="checkbox" name={name} required={required} className="mt-1 accent-brand-green" />
      <label className="text-sm text-gray-600">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
    </div>
  )
}

export function FileInput({ label, name }: { label: string, name: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type="file" name={name} className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-brand-green file:text-white file:text-sm file:font-medium hover:file:bg-brand-green-dark" />
    </div>
  )
}

export function SubmitButton({ label = 'Submit' }: { label?: string }) {
  return (
    <button type="submit" className="btn-primary w-full text-center py-3">{label}</button>
  )
}
