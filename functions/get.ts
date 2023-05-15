const get = (obj: object, path: Array<string> | string, defaultValue?: any) => {
  const reg = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res: any, key: number) =>
          res !== null && res !== undefined ? res[key] : res,
        obj
      );
  const result = reg(/[,[\]]+?/) || reg(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export default get;
