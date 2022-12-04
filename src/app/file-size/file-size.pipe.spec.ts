import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {

  let pipe: FileSizePipe;

  beforeEach(() => {
    pipe = new FileSizePipe();
  });

  it('just trying how to test a pipe', () => {
    expect(pipe.transform(1024)).toEqual('1 kB');
  });

});
