const { distinctEarthquakesCoordinates } = require('../src/lib/processData');
const Earthquake = require('../src/domain/Earthquake');

test('filter to have latitude and longitude uniqueness', () => {

    const earthquakes = []

    const earthquake1 = new Earthquake(
        'M 2.2 - 3 km WNW of Dubrava, Croatia supp1',
        Object.entries({ longitude: 21.4831, latitude: 40.4591 }).toString(),
        2041
    );

    const earthquake2 = new Earthquake(
        'M 3.0 - 5 km NNW of Dubrava, Croatia supp',
        Object.entries({ longitude: 21.4831, latitude: 40.4591 }).toString(),
        2041
    );

    const earthquake3 = new Earthquake(
        'M 4.5 - 702 km N of Santa Cruz da Graciosa, Portugal 1',
        Object.entries({ longitude: -28.0645, latitude: 45.2933 }).toString(),
        2041
    );

    const earthquake4 = new Earthquake(
        'M 4.4 - 689 km N of Santa Cruz da Graciosa, Portugal 2',
        Object.entries({ longitude: -28.0645, latitude: 45.2933 }).toString(),
        2041
    );

    const earthquake5 = new Earthquake(
        'M 3.7 - 64 km NE of Nicola Town, Saint Kitts and Nevis',
        Object.entries({ longitude: -29.06, latitude: 46.294 }).toString(),
        654
    );

    earthquakes.push(earthquake1);
    earthquakes.push(earthquake2);
    earthquakes.push(earthquake3);
    earthquakes.push(earthquake4);
    earthquakes.push(earthquake5);

    expect(distinctEarthquakesCoordinates(earthquakes).length).toBe(3);
})