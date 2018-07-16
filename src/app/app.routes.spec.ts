import { AppRoutes } from './app.routes';

describe('AppRoutes', () => {
  let appRoutes: AppRoutes;

  beforeEach(() => {
    appRoutes = new AppRoutes();
  });

  it('should create an instance', () => {
    expect(appRoutes).toBeTruthy();
  });
});
