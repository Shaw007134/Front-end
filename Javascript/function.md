函数上下文的变量对象初始化只包括 Arguments 对象

在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

在代码执行阶段，会再次修改变量对象的属性值

函数的作用域在函数定义的时候就决定了。

这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！

当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。

这时候执行上下文的作用域链，我们命名为 Scope：

Scope = [AO].concat([[Scope]]);
至此，作用域链创建完毕。

函数执行上下文中作用域链和变量对象的创建过程
执行过程如下：

1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]

checkscope.[[scope]] = [
    globalContext.VO
];
2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈

ECStack = [
    checkscopeContext,
    globalContext
];
3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链

checkscopeContext = {
    Scope: checkscope.[[scope]],
}
4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明

checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    }，
    Scope: checkscope.[[scope]],
}
5.第三步：将活动对象压入 checkscope 作用域链顶端

checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
}
6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值

checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, [[Scope]]]
}
7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出

ECStack = [
    globalContext
];

而共享传递是指，在传递对象的时候，传递对象的引用的副本。

注意： 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本