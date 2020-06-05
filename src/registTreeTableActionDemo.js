
import va from 'va-web'
const {TreeTableActions} = va
// 创建一个动作按钮,供配置使用
const aaaa = {
  action: {
    type: 'aaaaaaaaaaa' // 动作标识，必填
  },
  id: 'e341d481-5172-9eac-c391-15ef5e196bbf11', // 唯一标识id，可选字段，建议不加
  type: 'va-treetable-toolitem', // 固定值，固定为'va-treetable-toolitem'，可选字段
  title: '增加同级1', // 按钮名称，必填
  isOperationColumn: false, // 是否出现在列操作中，必填
  children: [
    {
      action: {
        type: 'aaaaaaaaaaa' // 动作标识，必填
      },
      id: 'e341d481-5172-9eac-c391-15ef5e196bbf11', // 唯一标识id，可选字段，建议不加
      type: 'va-treetable-toolitem', // 固定值，固定为'va-treetable-toolitem'，可选字段
      title: '增加同级1', // 按钮名称，必填
      isOperationColumn: false, // 是否出现在列操作中，必填
      children: []
    }
  ]
}

// 创建一个动作按钮执行对象
class AAA extends TreeTableActions.TreeTableAction {
  // 动作标识
  getName () {
    return 'aaaaaaaaaaa'
  }
  // 按钮可用状态
  isEnabled (model) {
    return true
  }
  // 动作执行方法
  execute (model, view) {
    // console.log('aaa')
  }
}

// 注册到配置按钮页面
TreeTableActions.registerActionData('group', aaaa)
// 注册动作按钮执行对象
TreeTableActions.registerAction(new AAA())
