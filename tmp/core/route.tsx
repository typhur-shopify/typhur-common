// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/guide":{"path":"guide","id":"docs/guide","parentId":"DocLayout"},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"components/Alert/index":{"id":"components/Alert/index","path":"components/alert","parentId":"DocLayout","meta":{"_atom_route":true}},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'/Users/xavier.xiao/Downloads/perfect-design-master/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.26.0_@swc+helpers@0.5.1_@types+node@20.5.1_@types+react@18.3.18_esl_xhg7povrd4igwe2llpmyml5ram/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'/Users/xavier.xiao/Downloads/perfect-design-master/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'/Users/xavier.xiao/Downloads/perfect-design-master/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.26.0_@swc+helpers@0.5.1_@types+node@20.5.1_@types+react@18.3.18_esl_xhg7povrd4igwe2llpmyml5ram/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/guide': React.lazy(() => import(/* webpackChunkName: "docs__guide.md" */'/Users/xavier.xiao/Downloads/perfect-design-master/docs/guide.md')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'/Users/xavier.xiao/Downloads/perfect-design-master/docs/index.md')),
'components/Alert/index': React.lazy(() => import(/* webpackChunkName: "packages___typhur-shopify:ui__src__components__Alert__index.md" */'/Users/xavier.xiao/Downloads/perfect-design-master/packages/@typhur-shopify:ui/src/components/Alert/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'/Users/xavier.xiao/Downloads/perfect-design-master/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.26.0_@swc+helpers@0.5.1_@types+node@20.5.1_@types+react@18.3.18_esl_xhg7povrd4igwe2llpmyml5ram/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}