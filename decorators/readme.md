## 提供多种修饰器

* middleware
* once

### middleware
将方法修饰器进行简化，改造成类似 koa 中间件的形式，避免直接对 PropertyDescriptor 进行操作

### once
对方法运行结果进行缓存，可以实现类似单例的操作  
_todo: 增加入参的识别_

### sleep
你懂得，先sleep再执行