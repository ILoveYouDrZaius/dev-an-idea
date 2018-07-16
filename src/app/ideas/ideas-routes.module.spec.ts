import { IdeasRoutesModule } from './ideas-routes.module';

describe('IdeasRoutesModule', () => {
  let ideasRoutesModule: IdeasRoutesModule;

  beforeEach(() => {
    ideasRoutesModule = new IdeasRoutesModule();
  });

  it('should create an instance', () => {
    expect(ideasRoutesModule).toBeTruthy();
  });
});
