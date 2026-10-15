import { clipPolygon, foldGeometry, polygonArea } from '../lab/posterwall/geometry';

describe('poster wall fold geometry', () => {
  const W = 300;
  const H = 400;

  test('no drag means no fold', () => {
    const g = foldGeometry(W, H, { x: 290, y: 390 }, { x: 290, y: 390 });
    expect(g.folded).toBe(false);
    expect(g.remainingRatio).toBe(1);
  });

  test('remaining + flap areas cover the whole poster', () => {
    const g = foldGeometry(W, H, { x: W, y: H }, { x: 120, y: 200 });
    expect(g.folded).toBe(true);
    expect(polygonArea(g.remaining) + polygonArea(g.flap)).toBeCloseTo(W * H, 5);
  });

  test('the grabbed point is reflected onto the pointer', () => {
    const grab = { x: W, y: H };
    const pointer = { x: 120, y: 200 };
    const [a, b, c, d, e, f] = foldGeometry(W, H, grab, pointer).matrix;
    expect(a * grab.x + c * grab.y + e).toBeCloseTo(pointer.x, 6);
    expect(b * grab.x + d * grab.y + f).toBeCloseTo(pointer.y, 6);
  });

  test('pulling far enough leaves nothing stuck', () => {
    const g = foldGeometry(W, H, { x: W, y: H }, { x: -900, y: -900 });
    expect(g.remainingRatio).toBe(0);
  });

  test('clipPolygon keeps points on the negative side', () => {
    const square = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }];
    expect(polygonArea(clipPolygon(square, (p) => p.x - 5))).toBeCloseTo(50, 6);
  });
});
