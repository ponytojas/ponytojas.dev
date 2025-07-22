import remarkFrontmatter from 'remark-frontmatter';
import { compile } from 'xdm';

const result = await compile(file, {
    remarkPlugins: [remarkFrontmatter],
    outputFormat: 'function-body',
});