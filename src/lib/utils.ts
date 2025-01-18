import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 'cn' 함수는 여러 클래스를 받아서, 불필요한 중복 클래스를 제거하고 합친 결과를 반환합니다.
 *
 * @param inputs - 동적으로 추가될 클래스의 목록입니다.
 * @returns 최적화된 Tailwind CSS 클래스 문자열
 *
 * - `clsx`: 조건에 따라 클래스를 동적으로 추가하거나 제거하는 함수입니다.
 * - `twMerge`: Tailwind CSS에서 중복된 클래스를 병합하여 더 효율적인 클래스를 반환하는 함수입니다.
 * - 두 함수를 결합하여 최종적으로 중복을 제거하고 필요한 클래스만 반환합니다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 숫자를 한국 통화 형식으로 변환하여 반환합니다.
 *
 * @param {number} amount - 변환할 숫자 값.
 * @returns {string} - "###,###원" 형식의 문자열.
 *
 * 설명:
 * - `toLocaleString('ko-KR')`를 사용하여 숫자를 한국어 지역화 형식으로 변환합니다.
 *   - 3자리마다 쉼표(,)를 추가하는 작업 포함.
 * - 변환된 숫자에 "원"을 추가하여 최종 형식을 완성합니다.
 *
 * 사용 예:
 * formatCurrency(70000);  // "70,000원"
 * formatCurrency(1234567); // "1,234,567원"
 * formatCurrency(500);    // "500원"
 */
export function formatCurrency(amount: number) {
  return `${amount.toLocaleString('ko-KR')}원`;
}

const KILO = 1000;
const MILL = 1000000;
/**
 * 숫자를 크기에 따라 K(천 단위) 또는 M(백만 단위) 형식으로 변환합니다.
 *
 * @param {number} amount - 변환할 숫자 값.
 * @returns {string} - 변환된 형식의 문자열.
 *
 * 설명:
 * - 천 단위(1,000 이상)에서는 숫자 뒤에 'K'를 추가합니다.
 * - 백만 단위(1,000,000 이상)에서는 숫자 뒤에 'M'을 추가합니다.
 * - 해당하지 않는 숫자는 그대로 반환합니다.
 *
 * formatLargeNumber(700);      // "700"
 * formatLargeNumber(1500);     // "1.5K"
 * formatLargeNumber(2000000);  // "2M"
 */
export function formatLargeNumber(amount: number) {
  if (amount < KILO) return amount.toString();
  if (amount < MILL) return `${(amount / KILO).toFixed(1)}K`;
  return `${(amount / MILL).toFixed(1)}M`;
}

/**
 * 현재 페이지의 URL을 클립보드에 복사하는 함수.
 *
 * @async
 * @function handleShare
 * @returns {Promise<void>} - 성공적으로 클립보드에 복사되었는지 여부.
 *
 * 설명:
 * - 현재 페이지의 URL을 가져와 클립보드에 복사합니다.
 * - 복사 성공 시 사용자에게 알림을 표시합니다.
 * - 실패 시 에러를 콘솔에 출력하고 사용자에게 알림을 표시합니다.
 *
 * 예외 처리:
 * - `navigator.clipboard` API 사용이 실패하면 에러 메시지를 표시합니다.
 */
export const shareCurrentURL = async () => {
  try {
    const currentUrl = window.location.href; // 현재 URL 가져오기
    await navigator.clipboard.writeText(currentUrl); // 클립보드에 복사
    alert('URL이 클립보드에 복사되었습니다!'); // 성공 알림
  } catch (error) {
    console.error('URL 복사에 실패했습니다.', error);
    alert('URL 복사에 실패했습니다. 다시 시도해주세요.');
  }
};
