import { StoreInfoModule } from './store-info.module';

describe('StoreInfoModule', () => {
  let storeInfoModule: StoreInfoModule;

  beforeEach(() => {
    storeInfoModule = new StoreInfoModule();
  });

  it('should create an instance', () => {
    expect(storeInfoModule).toBeTruthy();
  });
});
