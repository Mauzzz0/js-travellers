import { checkTravellers } from './check-travellers';
import { BaseTraveller, BusinessTraveller, ExtremeTraveller } from './travellers.types';

describe('Check Travellers', () => {
  it('Should correctly check ready base travellers', () => {
    const travellers: BaseTraveller[] = [
      { name: 'Alice', age: 25, height: 165, weight: 70 },
      { name: 'Bob', age: 30, height: 180, weight: 80 },
      { name: 'Charlie', age: 18, height: 170, weight: 65 },
      { name: 'Dave', age: 28, height: 175, weight: 55 },
    ];

    const expectedResult = {
      Alice: { ready: true, data: travellers[0] },
      Bob: { ready: true, data: travellers[1] },
      Charlie: { ready: true, data: travellers[2] },
      Dave: { ready: true, data: travellers[3] },
    };

    const result = checkTravellers(travellers);
    expect(result).toEqual(expectedResult);
  });

  it('Should correctly check not-ready base travellers', () => {
    const travellers: BaseTraveller[] = [
      { name: 'Alice', age: 17, height: 165, weight: 70 },
      { name: 'Bob', age: 30, height: 191, weight: 80 },
      { name: 'Charlie', age: 20, height: 170, weight: 49 },
    ];

    const expectedResult = {
      Alice: { ready: false, data: travellers[0] },
      Bob: { ready: false, data: travellers[1] },
      Charlie: { ready: false, data: travellers[2] },
    };

    const result = checkTravellers(travellers);
    expect(result).toEqual(expectedResult);
  });

  it('Should correctly check ready extreme travellers', () => {
    const travellers: ExtremeTraveller[] = [
      { name: 'Alice', age: 25, height: 165, weight: 70, experience: 5 },
      { name: 'Bob', age: 30, height: 180, weight: 80, experience: 8 },
      { name: 'Charlie', age: 18, height: 170, weight: 65, experience: 3 },
      { name: 'Dave', age: 28, height: 175, weight: 55, experience: 10 },
    ];

    const expectedResult = {
      Alice: { ready: true, data: travellers[0] },
      Bob: { ready: true, data: travellers[1] },
      Charlie: { ready: true, data: travellers[2] },
      Dave: { ready: true, data: travellers[3] },
    };

    const result = checkTravellers(travellers);
    expect(result).toEqual(expectedResult);
  });

  it('Should correctly check not-ready extreme travellers', () => {
    const travellers: ExtremeTraveller[] = [
      { name: 'Alice', age: 17, height: 165, weight: 70, experience: 5 },
      { name: 'Bob', age: 30, height: 191, weight: 80, experience: 8 },
      { name: 'Charlie', age: 20, height: 170, weight: 49, experience: 3 },
    ];

    const expectedResult = {
      Alice: { ready: false, data: travellers[0] },
      Bob: { ready: false, data: travellers[1] },
      Charlie: { ready: false, data: travellers[2] },
    };

    const result = checkTravellers(travellers);
    expect(result).toEqual(expectedResult);
  });

  it('Should handle mixed traveller types', () => {
    const travellers: (ExtremeTraveller | BusinessTraveller)[] = [
      { name: 'Alice', age: 25, height: 165, weight: 70, experience: 5 },
      {
        name: 'Bob',
        age: 30,
        height: 180,
        weight: 80,
        company: 'Acme Corp',
        purpose: 'Meeting',
        budget: 1500,
      },
    ];

    const expectedResult = {
      Alice: { ready: true, data: travellers[0] },
      Bob: { ready: true, data: travellers[1] },
    };

    const result = checkTravellers(travellers);
    expect(result).toEqual(expectedResult);
  });
});
