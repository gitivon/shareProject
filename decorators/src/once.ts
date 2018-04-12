import MethodDecoratorMiddlewave from './middleware';

export const once = () => {
  return (target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return MethodDecoratorMiddlewave({ target, name, descriptor }, async (next: () => Promise<any>) => {
      const key = `Once:${name}`;
      if (!target[key]) {
        target[key] = await next();
      }
      return target[key];
    });
  };
};
