import { UPDATE_ENTRIES } from './';

export function updateEntries(entries) {
  const data = entries.values
    .filter((entry) => entry[2])
    .map((entry, index) => {
      const [title, subtitle] = entry[2].split('\n');

      return {
        title,
        subtitle,
        id: index + 1,
        done: entry[0] === 'TRUE',
        isNew: entry[1] === 'TRUE',
        link: entry[3],
        image: entry[4],
      };
    });

  return {
    type: UPDATE_ENTRIES,
    data,
  };
}
