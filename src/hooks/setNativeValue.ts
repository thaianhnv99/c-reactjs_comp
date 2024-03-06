export const setNativeValue = (element: HTMLInputElement, value: string) => {
  const ownValue = Object.getOwnPropertyDescriptor(element, 'value');
  const prototype = Object.getPrototypeOf(element);
  const ownPrototype = Object.getOwnPropertyDescriptor(prototype, 'value');
  if (!ownValue || !ownPrototype) return;
  const valueSetter = ownValue.set;
  const prototypeValueSetter = ownPrototype.set;

  if (valueSetter && prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else if (valueSetter) {
    valueSetter.call(element, value);
  }
};
