// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
export function modifyClientRenderOpts(memo: any) {
  const { history, hydrate } = memo;

  return {
    ...memo,
    hydrate: hydrate && ![].includes(history.location.pathname),
  };
}