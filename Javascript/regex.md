1. 工具可使用regexbuddy
2. 元字符

. * ? 

.匹配所有， *匹配0次或更多次，?匹配一次或0次 +匹配一次或多次
例如：a.*b与a.*?b，前者匹配尽可能多，后者匹配到就结束
常用*?, +?, ??, {n,m}?,{n,}?

{n} 重复n次，{n,}重复n次或更多次, {n,m}重复n到m次
\d：匹配一个数字
\w：匹配[a-z0-9A-Z]
\b \b: 匹配符合要求的单词，单词限定
^ $: 匹配开始结束之间的
上述换成大写则变成反义

[]匹配[]内的所有符合要求的字符
[^]反之

| 分支条件，从左到右，满足后就不再匹配
()分组，将子表达式做成子集，方便对match的字符串进行划分
  例如：(\d{1,3}\.){3}\d{1,3}
  (?<groupname>exp)可对分组进行命名
  (?:exp)匹配exp，但不捕获匹配的文本，也不给此分组分配组号

\1在表达式后面引用第一个分组匹配结果
?=exp，自身出现的位置的后面能匹配表达式，不会占用宽度，如(?!u)匹配后面不接u，后面可以为空
--- 例如，匹配不包含连续字符串abc的单词，\b((?!abc)\w)+\b
?<=exp，自身出现的位置的前面能匹配表达式
例如，(?<=<(\w+)>).*(?=<\/\1>)匹配不包括前缀和后缀本身

Option选择free-spacing可以加注释，以#开头