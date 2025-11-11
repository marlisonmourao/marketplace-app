import { tv, type VariantProps } from 'tailwind-variants'

export const inputVariants = tv({
  slots: {
    container: 'my-4 w-full',
    wrapper: 'flex-row items-center border-gray-200 border-b pb-2',
    input: 'flex-1 bg-transparent text-base text-gray-500',
    label: 'mb-3 font-semibold text-gray-300 text-xs',
    error: 'mt-1 text-danger text-sm',
  },
  variants: {
    isFocused: {
      true: {
        wrapper: 'border-purple-base',
        label: 'text-purple-base',
      },
    },
    isError: {
      true: {},
    },
    isDisabled: {
      true: {},
    },
  },
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
})

export type InputVariantsProps = VariantProps<typeof inputVariants>
