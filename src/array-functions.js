function take([first, ...tail], count = 1) {
  if (typeof first === 'undefined' || !count) {
    return [];
  }

  return [first, ...take(tail, count - 1)];
}

function skip([, ...tail], count = 1) {
  return count === 1 ? tail : skip(tail, count - 1);
}

function map([first, ...tail], callback) {
  if (typeof first === 'undefined') {
    return [];
  }

  return [callback(first), ...map(tail, callback)];
}

function reduce([first, ...tail], callback, initialValue) {
  if (!tail.length) {
    return callback(first, initialValue);
  }

  return callback(first, reduce(tail, callback, initialValue));
}

function filter([first, ...tail], callback) {
  if (typeof first === 'undefined') {
    return [];
  }

  if (callback(first)) {
    return [first, ...filter(tail, callback)];
  }

  return [...filter(tail, callback)];
}

export {
  take, skip, map, reduce, filter,
};
