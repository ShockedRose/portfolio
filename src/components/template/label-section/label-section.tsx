import classNames from 'classnames'
import './label-section.scss'
import { FC } from 'react'

interface LabelSectionProps {
  label: string
  labelPosition: 'left' | 'right'
}

export const LabelSection: FC<LabelSectionProps> = ({ label, labelPosition, children }) => {
  const labelSectionClassName = classNames('label-section')
  const labelTitleClassName = classNames(
    'label-section__title',
    `label-section__title--${labelPosition}`
  )
  const labelClassName = classNames(
    'label-section__label',
    `label-section__label--${labelPosition}`
  )
  const labelContentClassName = classNames(
    'label-section__content',
    `label-section__content--${labelPosition}`
  )

  return (
    <section className={labelSectionClassName}>
      <div className={labelClassName} data-testid={`label-${labelPosition}`}>
        <h2 className={labelTitleClassName}>{label}</h2>
      </div>
      <div className={labelContentClassName}>{children}</div>
    </section>
  )
}
