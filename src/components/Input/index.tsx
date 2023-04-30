/* eslint-disable react/jsx-props-no-spreading */
import { FocusEvent } from 'react';
import { Label, InputStyle, Icone, ErroAlert, InputContainer } from './styles';

export interface IPropsInput {
  name?: string;
  id?: string;
  idWidth?: string;
  label?: any;
  disabled?: boolean;
  error?: string | null;
  icon?: any | undefined;
  value?: string | number;
  type?: string;
  required?: boolean;
  requiredLabel?: boolean;
  placeholder?: string;
  maxLenght?: number | undefined;
  onClick?: (() => void) | null;
  onChange?: ((e: FocusEvent<HTMLInputElement>) => void) | null;
  onKeyUp?: ((e: FocusEvent<HTMLInputElement>) => void) | null;
  onBlur?: ((e: FocusEvent<HTMLInputElement>) => void) | null;
  children?: any;
}

const defaultProps = {
  name: '',
  id: '',
  idWidth: '',
  label: '',
  disabled: false,
  error: null,
  icon: null,
  value: undefined,
  type: '',
  required: false,
  requiredLabel: false,
  placeholder: '',
  maxLenght: undefined,
  onClick: null,
  onKeyUp: null,
  onChange: null,
  onBlur: null,
  children: undefined,
};

const Input: React.FC<IPropsInput> = ({
  name,
  id,
  idWidth,
  label,
  icon,
  error,
  value,
  type,
  disabled,
  required,
  requiredLabel,
  placeholder,
  maxLenght,
  onClick,
  onChange,
  onKeyUp,
  onBlur,
  children,
}: IPropsInput) => {
  function addLabel() {
    if (label) {
      return (
        <Label htmlFor={id}>
          {requiredLabel ? (
            <div>
              <b>{label}</b> (Obrigatorio)
            </div>
          ) : (
            <b>{label}</b>
          )}
        </Label>
      );
    }
    return null;
  }

  function addIcon() {
    if (icon) {
      return (
        <Icone
          onClick={() => {
            if (onClick) onClick();
          }}
          error={error}
        >
          {icon}
        </Icone>
      );
    }
    return null;
  }

  if (value !== null || value !== undefined) {
    return (
      <div id={idWidth} style={{ width: '100%', position: 'relative' }}>
        {addLabel()}
        <InputContainer>
          <InputStyle
            id={id}
            name={name}
            value={value}
            error={error}
            state={icon}
            type={type}
            required={required}
            maxLength={maxLenght}
            disabled={disabled}
            placeholder={placeholder}
            onKeyUp={(e: any) => {
              if (onKeyUp) onKeyUp(e);
            }}
            onChange={(e: FocusEvent<HTMLInputElement>) => {
              if (onChange) onChange(e);
            }}
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              if (onBlur) onBlur(e);
            }}
          />
          {addIcon()}
        </InputContainer>
        <ErroAlert erro={!!error}>{error}</ErroAlert>
        {children !== undefined && children}
      </div>
    );
  }

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {addLabel()}
      <InputContainer>
        <InputStyle
          id={id}
          name={name}
          type={type}
          state={icon}
          error={error}
          required={required}
          placeholder={placeholder}
          maxLength={maxLenght}
          disabled={disabled}
          onChange={(e: FocusEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
          }}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            if (onBlur) onBlur(e);
          }}
        />
        {addIcon()}
      </InputContainer>
      <ErroAlert erro={!!error}>{error}</ErroAlert>
      {children !== undefined && children}
    </div>
  );
};

Input.defaultProps = defaultProps;

export default Input;
