import { expect } from 'chai';
import minifyCSS from '../src';

describe('minifyCSS', () => {
  it('should be a function', () => {
    expect(minifyCSS).to.be.a('function');
  });

  it('should remove comments', () => {
    const style = `
      body {
        background-color: red; /*Changes body bgColor to red*/
      }
    `;

    expect(minifyCSS(style)).to.not.match(/\/\*/g);
  });

  it('should close up gaps correctly', () => {
    const style = `
      body {
        background-color: red !important;
      }
    `;

    expect(minifyCSS('body {')).to.eql('body{');
    expect(minifyCSS('body{ font-size: 14px')).to.eql('body{font-size:14px');
    expect(minifyCSS('padding: 0 0 5px 7px; padding-right: 9px')).to.eql('padding:0 0 5px 7px;padding-right:9px');
    expect(minifyCSS(style)).to.not.match(/red\s+!important/g);
  });

  it('should remove the last semi-colon in a style tag', () => {
    const style = `
      body {
        background-color: red;
        color: blue;
      }
    `;

    expect(minifyCSS(style)).to.not.match(/;\s+}/g);
  });
});
