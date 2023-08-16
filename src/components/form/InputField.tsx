import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { GridColType } from '@mui/x-data-grid';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | GridColType;
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input type={type} {...registration} />
    </FieldWrapper>
  );
};
