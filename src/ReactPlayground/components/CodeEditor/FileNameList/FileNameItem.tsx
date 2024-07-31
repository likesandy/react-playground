import classnames from 'classnames'
import React, { useState } from 'react'

import styles from './index.module.scss'

export interface FileNameItemProps {
  value: string
  active: boolean
  onClick: () => void
}

export const FileNameItem: React.FC<FileNameItemProps> = props => {
  const { value, active = false, onClick } = props

  const [name, setName] = useState(value)

  return (
    <div
      className={classnames(styles['tab-item'], active ? styles.active : null)}
      onClick={onClick}
    >
      <span>{name}</span>
    </div>
  )
}
