import { tv, type VariantProps } from 'tailwind-variants'

export enum ButtonVariantsEnum {
  FILLED = 'field',
  OUTLINE = 'outline',
}

export const buttonVariants = tv({
  slots: {
    base: 'h-[48px] w-full flex-row items-center rounded-[10px] border px-4',
    text: 'font-semibold text-base',
    icon: '',
  },
  variants: {
    hasIcon: {
      true: {
        base: 'justify-between',
      },
      false: {
        base: 'justify-center',
      },
    },
    isLoading: {
      true: {
        base: 'opacity-60',
      },
    },
    isDisabled: {
      true: 'opacity-50',
    },
    variant: {
      field: {
        base: 'border-purple-base bg-purple-base',
        text: 'text-white',
      },
      outline: {
        base: 'border-purple-base bg-transparent',
      },
    },
  },
  defaultVariants: {
    hasIcon: false,
    isLoading: false,
    isDisabled: false,
    variant: ButtonVariantsEnum.FILLED,
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
