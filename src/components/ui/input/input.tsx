import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type InputProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    {
      label,
      errorMessage,
      className,
      onChange,
      onValueChange,
      disabled,
      value,
      placeholder,
      ...rest
    },
    ref
  ) => {
    const baseInputClasses = `
            w-full px-4 py-3 h-[74px]
            border-2 border-light-300 text-light-700
            rounded-10
            placeholder-light-300
            transition-all duration-200
            focus:outline-none focus:ring-0 focus:border-accent-100 
            hover:border-accent-100 
            disabled:border-light-300 disabled:cursor-not-allowed
            ${errorMessage ? 'border-info-300 text-info-300' : ''}
            ${className || ''}
        `

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <div className="flex flex-col gap-2 w-full ">
        {label && (
          <div className={`text-mediumBold ${disabled ? 'text-light-300' : 'text-dark-100'}`}>
            {label}
          </div>
        )}
        <div className="relative flex w-full text-mediumBold">
          <input
            className={baseInputClasses}
            onChange={onChangeHandler}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
        </div>
        {errorMessage && <div className="text-base text-info-400">{errorMessage}</div>}
      </div>
    )
  }
)

Input.displayName = 'Input'
