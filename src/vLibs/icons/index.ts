// 自动引入 src/assets/icons 目录下所有 SVG 文件（注册为 symbol）
const requireAll = (requireContext: any) => {
  requireContext.keys().forEach(requireContext);
};

const req = require.context('@/assets/icons', false, /\.svg$/);
requireAll(req);