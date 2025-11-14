import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path,
} from 'react-hook-form'
import { Input, type InputProps } from '../input'

interface InputControllerProps<T extends FieldValues>
  extends Omit<InputProps, 'value' | 'onChangeText' | 'error'> {
  control: Control<T>
  name: Path<T>
  errors: FieldErrors<T>
}

export function InputController<T extends FieldValues>({
  control,
  name,
  errors,
  ...props
}: InputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <Input
          error={error?.message}
          isDisabled={isSubmitting || props.isDisabled}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...props}
        />
      )}
    />
  )
}
