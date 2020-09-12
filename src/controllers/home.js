import { testEnvironmentVariable } from '../settings';

export const indexPage = (res, req) => res.status(200).json({ message: testEnvironmentVariable });
