import { Controller, useFormContext } from 'react-hook-form';

import { FormMessage } from '../ui/form';
import { Upload, UploadAvatar, UploadProps } from '../upload';

// ----------------------------------------------------------------------

interface Props extends Omit<UploadProps, 'file'> {
  name: string;
  multiple?: boolean;
}

// ----------------------------------------------------------------------

export function RHFUploadAvatar({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <UploadAvatar error={!!error} file={field.value} {...other} />

          {!!error && (
            <FormMessage className="text-center">{error.message}</FormMessage>
          )}
        </div>
      )}
    />
  );
}

// ----------------------------------------------------------------------

/**
 * RHFUpload 컴포넌트는 React Hook Form과 통합된 파일 업로드 컴포넌트입니다.
 *
 * @param {string} name - 업로드 필드의 이름입니다.
 * @param {boolean} multiple - 다중 파일 업로드를 허용할지 여부를 나타냅니다.
 * @param {string} [helperText] - 업로드 필드에 대한 도움말 텍스트입니다.
 * @param {Props} other - 기타 추가 속성입니다.
 *
 * @returns {JSX.Element} 파일 업로드 컴포넌트를 반환합니다.
 */
export function RHFUpload({ name, multiple, helperText, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Upload
          multiple={multiple}
          accept={{ 'image/*': [] }}
          files={multiple ? field.value : undefined}
          file={!multiple ? field.value : undefined}
          error={!!error}
          disabled={!!error}
          helperText={
            (!!error || helperText) && (
              <FormMessage>{error ? error?.message : helperText}</FormMessage>
            )
          }
          {...other}
        />
      )}
    />
  );
}
