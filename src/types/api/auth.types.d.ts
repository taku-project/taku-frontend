import { operations } from './apiSchema.types';

/**
 * path: '/api/auth/logout'
 */

/**
 * 로그아웃
 */

export type LogoutSuccessResponse =
  operations['logout']['responses'][200]['content']['*/*'];
