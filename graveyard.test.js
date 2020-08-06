const moment = require('moment');
const slugify = require('slugify');

const data = require('./graveyard.json');

slugify.extend({
  '+': 'plus',
  '@': 'at',
});


const compareItems = (a, b) => {
  if (a.slug > b.slug) {
    return 1;
  } else if (a.slug < b.slug) {
    return -1;
  }
  else {
    return 0;
  }
}

const findSlugDuplicates = (arr) => {
  // You can define the comparing function here.
  let sorted_arr = arr.slice().sort(compareItems);

  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1].slug == sorted_arr[i].slug) {
      results.push(sorted_arr[i].slug);
    }
  }
  return results;
}

describe('graveyard', () => {
  it('objects should be valid', () => {
    data.forEach((product) => {
      // All data is present for each product
      expect(product.dateClose).not.toBeNull();
      expect(product.dateOpen).not.toBeNull();
      expect(product.description).not.toBeNull();
      expect(product.link).not.toBeNull();
      expect(product.name).not.toBeNull();
      expect(product.type).not.toBeNull();

      // Check `dateClose` format
      // Format: YYYY-MM-DD
      expect(product.dateClose.split('-')).toHaveLength(3);
      // Format Year: YYYY
      expect(product.dateClose.split('-')[0]).toHaveLength(4);
      // Format Month: MM
      expect(product.dateClose.split('-')[1]).toHaveLength(2);
      // Format Day: DD
      expect(product.dateClose.split('-')[2]).toHaveLength(2);

      // Check `dateOpen` format
      // Format: YYYY-MM-DD
      expect(product.dateOpen.split('-')).toHaveLength(3);
      // Format Year: YYYY
      expect(product.dateOpen.split('-')[0]).toHaveLength(4);
      // Format Month: MM
      expect(product.dateOpen.split('-')[1]).toHaveLength(2);
      // Format Day: DD
      expect(product.dateOpen.split('-')[2]).toHaveLength(2);

      // Dates are Chronologically Correct
      const dateClose = moment(product.dateClose);
      const dateOpen = moment(product.dateOpen);
      expect(dateClose.isValid()).toBe(true);
      expect(dateOpen.isValid()).toBe(true);
      expect(dateClose.isAfter(dateOpen)).toBe(true);
    });
  });
  it('names are unique', () => {
    // Add a slug to each item
    data.map((item) => {
      if (item.slug != undefined) {
        return;
      }

      // Create slug from product's name
      const newItem = item;
      newItem.slug = slugify(item.name, {
        lower: true,
      });
      return newItem;
    });
    // Create a set (removes any duplicate slugs)
    const items = [...new Set(data.map(item => item.slug))];

    console.log("Duplicates found: ");
    console.log(findSlugDuplicates(data));

    // Both the data and items arr should have the same length
    expect(items.length).toBe(data.length);
  });
});
