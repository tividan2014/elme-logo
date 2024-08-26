import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  label: string
}

export const Label = ({ icon, label }: Props) => {
  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{label}</span>
    </div>
  )
}
