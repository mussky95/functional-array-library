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

function reduce([first, ...tail], callback, initialValue = 0) {
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

function Chain(value) {
  this.current = value;

  this.take = function (count) {
    this.current = take(this.current, count);

    return this;
  };

  this.skip = function (count) {
    this.current = skip(this.current, count);

    return this;
  };

  this.map = function (callback) {
    this.current = map(this.current, callback);

    return this;
  };

  this.reduce = function (callback, initialValue = 0) {
    this.current = reduce(this.current, callback, initialValue);

    return this;
  };

  this.filter = function (callback) {
    this.current = filter(this.current, callback);

    return this;
  };

  this.value = function () {
    return this.current;
  };
}
Chain.create = (value) => new Chain(value);

function chain(value) {
  return Chain.create(value);
}

export {
  take, skip, map, reduce, filter, chain,
};
