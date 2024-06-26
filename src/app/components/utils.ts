export function getNextKeyOfObject<T extends object>(
  currentProperty: keyof T,
  properties: Array<keyof T>
): keyof T {
  if (properties.indexOf(currentProperty) < properties.length - 1) {
    return properties.at(properties.indexOf(currentProperty) + 1) as keyof T;
  }

  return properties[0] as keyof T;
}
