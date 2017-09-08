import { NgPanelAppPage } from './app.po';

describe('ng-panel-app App', () => {
  let page: NgPanelAppPage;

  beforeEach(() => {
    page = new NgPanelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
