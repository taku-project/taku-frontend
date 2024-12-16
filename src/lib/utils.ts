import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 'cn' 함수는 여러 클래스를 받아서, 불필요한 중복 클래스를 제거하고 합친 결과를 반환합니다.
export function cn(...inputs: ClassValue[]) {
  // clsx는 조건에 따라 클래스를 동적으로 추가하거나 제거하는 함수입니다.
  // twMerge는 tailwind CSS에서 중복된 클래스를 병합하여 더 효율적인 클래스를 반환하는 함수입니다.
  // 이 두 가지를 결합하여, 최종적으로 중복을 제거하고 필요한 클래스만을 반환합니다.
  return twMerge(clsx(inputs));
}