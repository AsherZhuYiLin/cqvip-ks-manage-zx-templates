const { notEmpty } = require('../utils.js')
let { templateFolder } = require('../../../src/config/setting.config.js')
module.exports = {
  description: '创建curd',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入view名称,勿与之前重复,然后点击回车',
      validate: notEmpty('name'),
    },
  ],
  actions: (data) => {
    const name = '{{name}}'
    const properCaseName = '{{properCase name}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/${templateFolder || 'project'}/${name}/index.vue`,
        templateFile: 'node_modules/zx-templates/curd/index.hbs',
        data: {
          name: name,
        },
      },
      {
        type: 'add',
        path: `src/views/${
          templateFolder || 'project'
        }/${name}/components/${properCaseName}Edit.vue`,
        templateFile: 'node_modules/zx-templates/curd/edit.hbs',
        data: {
          name: name,
        },
      },
      {
        type: 'add',
        path: `mock/controller/${name}.js`,
        templateFile: 'node_modules/zx-templates/mock/index.hbs',
        data: {
          name: name,
        },
      },
      {
        type: 'add',
        path: `src/api/${name}.js`,
        templateFile: 'node_modules/zx-templates/api/index.hbs',
        data: {
          name: name,
        },
      },
    ]

    return actions
  },
}
