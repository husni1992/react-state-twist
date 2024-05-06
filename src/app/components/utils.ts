export function getNextKeyOfObject<T extends object>(
  currentProperty: keyof T,
  properties: Array<keyof T>
): keyof T {
  const _props = properties.filter(
    (prop) => prop !== "image" && prop !== "address" && prop !== "email"
  );
  if (_props.indexOf(currentProperty) < _props.length - 1) {
    return _props.at(_props.indexOf(currentProperty) + 1) as keyof T;
  }

  return _props[0] as keyof T;
}
