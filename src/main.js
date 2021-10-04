const div = dom.create('<div><span>1</span></div>')
console.log(div)

dom.after(test,div) 

let div2 = dom.create('<div>cuizhixian</div>')
dom.append(div,div2)

let div3 = dom.create('<div id="parent"></div>')
dom.wrap(div2,div3)

const x = dom.empty(window.empty) 
console.log(x)

dom.attr(test,'title','Hi,i am frank')
const y =dom.attr(test,'title')
console.log(y)

dom.text(test,'你好,这是新的内容')

const html = dom.html(test)
console.log(html)

dom.style(test,{border:'1px solid red',color:'blue'})

dom.class.add(test,'red')

dom.on(test,'click',()=>{
  console.log('点击了')
})

const each = dom.find('#travel')[0]
dom.each(dom.children(each),n=>dom.style(n,'color','red'))